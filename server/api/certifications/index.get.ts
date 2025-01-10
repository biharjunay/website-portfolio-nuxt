import { certifications } from "~/server/database/schema"

export default defineEventHandler(async event => {
    return await useDrizzle().select().from(certifications).all();
})