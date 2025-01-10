import { z } from "zod"

const bodySchema = z.object({
    major: z.string().nonempty(),
    educationName: z.string().nonempty(),
    monthStart: z.number().min(1),
    monthEnd: z.number().min(1),
    yearStart: z.number().min(1),
    yearEnd: z.number().min(1),
    description: z.string().nonempty(),
})

export default defineEventHandler(async event => {
    const body = await readValidatedBody(event, bodySchema.parseAsync)
    return drizzleDb.insert(tables.educations).values(body).returning();
})