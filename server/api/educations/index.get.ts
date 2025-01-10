import { educations } from "~/server/database/schema"

export default defineEventHandler(async event => {
    const params = getQuery(event)
    if (!!params.id)  
        return await drizzleDb.select().from(educations).where(eq(educations.id, params.id as number))
    return await drizzleDb.select().from(educations).all()
})