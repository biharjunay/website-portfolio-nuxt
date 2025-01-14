// import path from 'path'
// import fs from 'fs'
//
// export default defineEventHandler(async (event) => {
//     const files = await readMultipartFormData(event)
//
//     const file = files?.find(item => item.name === "file")!
//     const filename = `${new Date().getTime()}_${file.filename!}`
//     const filePath = path.join(process.cwd(), 'public', filename)
//     fs.writeFileSync(filePath, file.data)
//
//     return {
//         name: file.name,
//         url: `/${filename}`
//     }
// })

import {put} from "@vercel/blob";

export default defineEventHandler(async event => {
    let body = await readMultipartFormData(event)
    if (!body) throw createError({
        status: 422,
        message: "Please Upload Image"
    })
    return (await put(`${new Date().getTime()}${body[0].filename}`, body[0].data, {access: "public"})).url
})