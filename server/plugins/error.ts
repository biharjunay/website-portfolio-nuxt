export default defineNitroPlugin(nitroApp => {
    nitroApp.hooks.hook('error' , (error, context) => {
        console.log(error, context)
    })
})