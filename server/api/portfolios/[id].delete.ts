import { portfolios } from "~/server/database/schema"

export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    try {
        return await useDrizzle().delete(portfolios).where(eq(portfolios.id, parseInt(id)))
    } catch (err: any) {
        return createError({
            message: err.message
        })
    }
})