export default defineEventHandler(async (event) => {
    const files = await readBody<{ files: File[] }>(event)
    console.log(files)

    return 'success!'
})

interface File {
    name: string
    content: string
}
