export default defineEventHandler(async event => {
    return await useDrizzle().select().from(tables.users).all()
})