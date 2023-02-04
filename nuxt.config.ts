

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    // commented to avoid logging atx to cloud atx host, this is development copy
    // might need local atx at some time in the future but not for now.
    
    // app: {
    //     head: {
    //         script: [
    //             {
    //                 // children: "https://umami.atxsite.space/umami.js",
    //                 async: true,
    //                 defer: true,
    //                 src: "http://127.0.0.1:3000/umami.js",
    //                 'data-website-id': '90a633c2-e57b-4e5e-96b0-d3436d003202'
    //             }
    //         ]
    //     }
        
    // },

    build: {
        // loaders
    }
    
    
})



