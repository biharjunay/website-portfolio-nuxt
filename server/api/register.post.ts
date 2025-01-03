import { z } from "zod"
import * as bcrypt from "bcrypt"

const bodySchema = z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8).optional(),
}).superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) ctx.addIssue({
        message: 'Password didn\'t match',
        code: 'custom'
    })
})

export default defineEventHandler(async event => {
    const body = await readValidatedBody(event, bodySchema.parse)
    const user = (await useDrizzle().select().from(tables.users).where(eq(tables.users.email, body.email)))[0]
    if (user) throw createError({
        status: 422,
        message: 'Email is exist'
    })
    delete body.confirmPassword
    body.password = await bcrypt.hash(body.password, 10)
    return await useDrizzle().insert(tables.users).values(body).returning()
})