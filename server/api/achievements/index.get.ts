export default defineEventHandler(async event => {
    return await drizzleDb.select().from(tables.achievements).all()
})