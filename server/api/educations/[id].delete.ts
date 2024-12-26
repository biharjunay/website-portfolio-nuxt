export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    try {
        return await useDrizzle().delete(tables.educations).where(eq(tables.educations.id, parseInt(id)))
    } catch (err: any) {
        throw createError({
            message: err.message
        })
    }
})