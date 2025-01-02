import successResponse from "~/constants/success-response"

export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    await useDrizzle().delete(tables.educations).where(eq(tables.educations.id, parseInt(id)))
    return successResponse
})