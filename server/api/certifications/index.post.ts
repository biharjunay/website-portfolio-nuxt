import Joi from "joi"
import { z } from "zod"
import validateUserID from "~/server/helpers/userid-validation"

const validator = Joi.object({
    user_id: Joi.number().required(),
    title: Joi.string().required(),
    yearStart: Joi.number().required(),
    yearEnd: Joi.string().required(),
})

const bodySchema = z.object({
    userId: z.number().min(1),
    title: z.string().nonempty(),
    yearStart: z.number().min(1),
    yearEnd: z.number().min(1),
    certificateUrl: z.string().nonempty()
}).superRefine(async ({userId}, ctx) => {
    await validateUserID(userId, ctx) 
})
export default defineEventHandler(async event => {
    const body = await readValidatedBody(event, bodySchema.parse)
    return await useDrizzle().insert(tables.certifications).values(body)
})
