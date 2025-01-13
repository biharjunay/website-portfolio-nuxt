import bcrypt from 'bcrypt';
export default defineTask({
    meta: {
        name: 'db:seed',
        description: 'run database seed task'
    },
    async run() {
        console.log('Running DB seed task...')
        const heroes = [
            {
                name: 'Yusuf Biharjuna',
                email: 'test@test.test',
                password: await bcrypt.hash('anjaymabar', 10),
                avatar: '/profile.png',
                description: 'I currently work as a Software Developer (focusing on Web and Mobile Development). I have so much experience in Computers. Not only in programming. but also, in Network engineering and graphic design. Passionate about computer makes me want to learn more. Anywhere, anytime'
            }
        ]
        await drizzleDb.insert(tables.heroes).values(heroes)
        return { result: 'success' }
    }
})