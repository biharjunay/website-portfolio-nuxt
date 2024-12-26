export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    try {
        await useDrizzle().delete(tables.achievements).where(eq(tables.achievements.id, parseInt(id)))
    } catch (err) {
        if (err instanceof Error) {
            return createError({
                message: err.message
            })
        }
    }
})