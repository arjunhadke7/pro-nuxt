<template>
    <div class="container w-[97%] md:w-4/5 singlepost">




        <h1 class="text-4xl mb-6" v-html="title"></h1>
        <div v-html="content"></div>

        <!-- <pre>{{ seo.og_description }}</pre> -->
        <!-- image gallery below -->

        <h4 v-if="images" class="text-2xl">More Photos attached below</h4>

        <div class="relative h-auto" v-if="images">
            <div class="md:w-3/5 w-full h-48 border-2 border-gray rounded-md shadow-md p-4">
                <div
                    class="overflow-hidden h-40 grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-cols-3 gap-1 justify-around mx-2">
                    <div v-for="image, key in images" :key="key" class="">
                        <img :src="image.sizes.thumbnail" alt="" class="p-1 h-[100px] w-[100px]">
                    </div>
                </div>
            </div>
            <div
                class="absolute bg-gradient-to-t from-black from-70% via-gray-700 via-90% opacity-60 md:w-3/5 w-full bottom-0 h-48">

            </div>
            <div class="absolute bottom-0 md:w-3/5 w-full mx-auto mb-3">
                <button
                    class="mx-auto block border-2 border-white text-white md:text-base text-sm rounded-sm hover:text-black hover:bg-white mt-2 px-2 py-3"
                    @click="initPs()">
                    See all images now
                </button>
            </div>
        </div>




    </div>



    <!-- the hidden html for pswp below -->
    <Pswp />
</template>


<script>
import axios from 'axios'

import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';


definePageMeta({
    layout: 'blog'
})
export default {



    setup() {
        let title = ref('')
        let content = ref('')
        let images = ref([])
        let thumbs = ref()

        let seoTitle = ref('')
        let des = ref('hello there')

        let items = []


        /**
         * 1. Get the data using getSinglePost then call the same directly after that
         * 2. Set the head for SEO
         * 3. Set the gallery if images are available
         */





        const getSinglePost = async () => {
            // axios.get(`https://arjunhadke.in/wp-json/wp/v2/posts/${postID.value}`)
            axios.get(`https://arjunhadke.in/wp-json/wp/v2/posts/2179`)
                // axios.get(`http://arjunhadke.in/wp-json/wp/v2/posts/2084`)
                // below is for woo commerce only
                // axios.get(`${useRuntimeConfig().url}${useRuntimeConfig().append}/products?_fields=id,description,slug,name`,
                // {
                //   auth: {
                //     username: useRuntimeConfig().username,
                //     password: useRuntimeConfig().password
                //   }
                // }

                // )


                .then(response => {
                    title.value = response.data.title.rendered
                    content.value = response.data.content.rendered

                    images.value = response.data.acf.image_gallery

                    // seo.value  = response.data.title
                    seoTitle.value = response.data.yoast_head_json.title

                    // for the total number of full images, push each one into the items arr
                    let lengthOfImagesArr = response.data.acf.image_gallery.length
                    for (var i = 0; i < lengthOfImagesArr; i++) {
                        items.push(
                            {
                                src: response.data.acf.image_gallery[i].url,
                                w: response.data.acf.image_gallery[i].width,
                                h: response.data.acf.image_gallery[i].height,
                            }
                        )
                    }
                    console.log(seoTitle)
                    return seoTitle
                    
                })
                .catch(error => {
                    console.log(error);
                });
                
                
                
            } // end of the fetching function

            // getSinglePost()
             seoTitle = getSinglePost()
            console.log(seoTitle)

        useHead({
            meta: [
                {
                    property: 'og:title', content: (st) =>  {
                        return `${seoTitle}`
                    } 
                    // property: 'og:title', content: () =>  `${des.value}` 
                },
            ],
        })











        const initPs = () => {



            var options = {
                index: 0
            };

            var gallery = new PhotoSwipe(
                document.querySelector('.pswp'),
                PhotoSwipeUI_Default,
                items,
                options
            );

            gallery.init();
        }



        return {
            getSinglePost,
            title, content, seoTitle,
            images, thumbs,
            initPs,
            des
        }


    }
}
</script>


<style>
.singlepost>div>p {
    margin-bottom: 12px;
}

.singlepost>div>p>a {
    color: #008ae6;
}
</style>