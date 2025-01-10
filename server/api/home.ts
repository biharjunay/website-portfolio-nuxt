export default defineEventHandler(async () => {
    const user = await useDrizzle().select().from(tables.users).all()
    return user
})