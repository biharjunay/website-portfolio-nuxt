import successResponse from "~/constants/success-response"

export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    await drizzleDb.delete(tables.achievements).where(eq(tables.achievements.id, parseInt(id)))
    return successResponse
})