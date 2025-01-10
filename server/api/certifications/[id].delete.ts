import successResponse from "~/constants/success-response"

export default defineEventHandler(async event => {
    const id = getRouterParam(event, "id")!
    await drizzleDb.delete(tables.certifications).where(eq(tables.certifications.id, parseInt(id)))
    return successResponse
})