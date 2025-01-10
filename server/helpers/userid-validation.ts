import { z } from "zod";

export default async function validateUserID(userId: number, ctx: z.RefinementCtx): Promise<void> {
    const user = await drizzleDb.select().from(tables.users)
    if (!user) ctx.addIssue({
        code: "custom",
        message: "User id doesn't exist"
    })
}