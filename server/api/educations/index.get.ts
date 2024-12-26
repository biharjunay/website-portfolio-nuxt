import { educations } from "~/server/database/schema"

export default defineEventHandler(async event => {
    const params = getQuery(event)
    if (!!params.id)  
        return await useDrizzle().select().from(educations).where(eq(educations.id, params.id as number))
    return await useDrizzle().select().from(educations).all()
})