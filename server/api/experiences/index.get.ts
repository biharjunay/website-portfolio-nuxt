import { experiences } from "~/server/database/schema"

export default defineEventHandler(async event => {
    return await drizzleDb.select().from(experiences)
})