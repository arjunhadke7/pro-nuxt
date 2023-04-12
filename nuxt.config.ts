


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            username: process.env.NUXT_USERNAME,
            password: process.env.NUXT_PASSWORD,
            url: process.env.NUXT_URL,
            append: process.env.NUXT_APPEND,
        }
    },
    modules: ['@nuxtjs/tailwindcss'],


    app: {
        head: {
            title: "Nuxt App",
            meta: [

                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, user-scalable=no"
                },
                {
                    charset: "utf-8"
                }
            ],

            link: [
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.css' },
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.css' },
            ],
            script: [
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.js',
                    body: true,
                    defer: true
                },
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe-ui-default.min.js',
                    body: true,
                    defer: true
                }
            ]
        },

    },







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
});

