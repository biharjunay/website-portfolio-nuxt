export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    try {
        await useDrizzle().delete(tables.experiences).where(eq(tables.experiences.id, parseInt(id)))
    } catch (err: any) {
        return createError({
            message: err.message
        })
    }
})