export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    try {
        await useDrizzle().delete(tables.certifications).where(eq(tables.certifications.id, parseInt(id)))
    } catch (err) {
        if (err instanceof Error) {
            return createError({
                message: err.message
            })
        }
    }
})