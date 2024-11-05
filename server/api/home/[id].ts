import { profileModel } from "~/server/models/profile"

export default defineEventHandler(e => {
    const id = e.context.params!.id
    return profileModel().getDetail(id)
})