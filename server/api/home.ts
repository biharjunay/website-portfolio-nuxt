export default defineEventHandler(async () => {
    const user = await drizzleDb.select().from(tables.users).all()
    return user
})