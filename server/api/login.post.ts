import { z, ZodError } from "zod";
import bcrypt from "bcrypt"

const bodySchema = z.object({
    email: z.string().email().nonempty(),
    password: z.string().min(8).nonempty()
})

export default defineEventHandler(async event => {
    const { email, password } = await readValidatedBody(event, bodySchema.parse)
    const user = (await useDrizzle().select().from(tables.users).where(eq(tables.users.email, email)))[0]
    if (!user) throw createError({
        statusCode: 401,
        message: "Invalid email or password"
    })
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) throw createError({
        statusCode: 401,
        message: "Invalid email or password"
    })
    await setUserSession(event, {
        user
    })
    return user
})