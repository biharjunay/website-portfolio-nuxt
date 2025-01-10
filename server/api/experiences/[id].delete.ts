import successResponse from "~/constants/success-response"

export default defineEventHandler(async event => {
    const id = getRouterParam(event, "id")!
    await useDrizzle().delete(tables.experiences).where(eq(tables.experiences.id, parseInt(id)))
    return successResponse
})