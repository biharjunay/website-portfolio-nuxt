export default defineTask({
    meta: {
        name: 'db:seed',
        description: 'run database seed task'
    },
    async run() {
        console.log('Running DB seed task...')
        const users = [
            {
                name: 'Yusuf Biharjuna',
                email: 'john@example.com',
                password: 'password123',
                avatar: 'https://example.com/avatar/john.png',
                description: 'I currently work as a Software Developer (focusing on Web and Mobile Development). I have so much experience in Computers. Not only in programming. but also, in Network engineering and graphic design. Passionate about computer makes me want to learn more. Anywhere, anytime'
            }
        ]
        await useDrizzle().insert(tables.users).values(users)
        return { result: 'success' }
    }
})