import successResponse from "~/constants/success-response"
import { portfolios } from "~/server/database/schema"

export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    await drizzleDb.delete(portfolios).where(eq(portfolios.id, parseInt(id)))
    return successResponse
})