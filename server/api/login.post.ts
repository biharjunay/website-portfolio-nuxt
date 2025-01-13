import {z} from "zod";
import bcrypt from "bcrypt"

const bodySchema = z.object({
    email: z.string().email().nonempty(),
    password: z.string().min(8).nonempty()
})

export default defineEventHandler(async event => {
    const {email, password} = await readValidatedBody(event, bodySchema.parse)
    const user = (await drizzleDb.select().from(tables.heroes).where(eq(tables.heroes.email, email)))[0]
    if (!user || !(await bcrypt.compare(password, user.password))) throw createError({
        statusCode: 401,
        message: "Invalid email or password"
    })
    await setUserSession(event, {
        user
    })
    return user
})