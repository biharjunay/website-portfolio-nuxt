import path from 'path'
import fs from 'fs'

export default defineEventHandler(async (event) => {
    const files = await readMultipartFormData(event)

    const file = files?.find(item => item.name === "file")!
    const filename = `${new Date().getTime()}_${file.filename!}`
    const filePath = path.join(process.cwd(), 'public', filename)
    fs.writeFileSync(filePath, file.data)

    return {
        name: file.name,
        url: `/${filename}`
    }
})