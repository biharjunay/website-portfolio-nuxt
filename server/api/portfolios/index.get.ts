import { portfolios } from "~/server/database/schema"

export default defineEventHandler(async event => {
    const params = getQuery(event)
    return await useDrizzle().select().from(portfolios).all()
})