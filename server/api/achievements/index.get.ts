export default defineEventHandler(async event => {
    return await useDrizzle().select().from(tables.achievements).all()
})