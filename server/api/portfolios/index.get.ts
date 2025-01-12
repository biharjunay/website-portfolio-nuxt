import { portfolios } from "~/server/database/schema"

export default defineEventHandler(async event => {
    const params = getQuery(event)
    return await drizzleDb.select().from(portfolios)
})