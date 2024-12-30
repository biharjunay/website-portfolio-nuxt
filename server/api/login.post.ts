import { z, ZodError } from "zod";

const bodySchema = z.object({
    email: z.string().email().nonempty(),
    password: z.string().min(8)
})

export default defineEventHandler(async event => {
    try {
        // const zod = bodySchema.parse(await readBody(event))
        // console.log(zod)
        const body = await readValidatedBody(event, bodySchema.parse)
        console.log(body)   c
        return body
    } catch (err) {
        if (err instanceof ZodError) {
            return createError({
                status: 400,
                message: err.message
            })
        }
        // return createError({})
    }
})