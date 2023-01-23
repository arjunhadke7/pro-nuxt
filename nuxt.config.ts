

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            script: [
                {
                    // children: "https://umami.atxsite.space/umami.js",
                    async: true,
                    defer: true,
                    src: "https://umami.atxsite.space/umami.js",
                    'data-website-id': 'c52f0aab-f414-4fe6-b518-3389ec3b8562'
                }
            ]
        }
        
    },
    
})




