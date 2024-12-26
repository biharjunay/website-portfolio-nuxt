export default defineEventHandler(async event => {
    try {
        return useDrizzle().select().from(tables.achievements).all()
    } catch (err) {
        if (err instanceof Error) {
            return createError({
                message: err.message
            })
        }
    }
})