import { educations } from "~/server/database/schema"

export default defineEventHandler(async event => {
    try {
        const body: typeof educations.$inferInsert = await readBody(event)
        console.log(body)
        return await useDrizzle().insert(educations).values(body)
    } catch (error) {
        return createError({
            status: 422,
            message: ''
        })
    }
})