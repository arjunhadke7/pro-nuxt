<template>
    <div class="container w-[97%] md:w-4/5 singlepost">

        <h1 class="text-4xl mb-6" v-html="title"></h1>
        <div v-html="content"></div>
        <!-- image gallery below -->

        <h4 class="text-2xl">Images below</h4>
        <div v-for="image, key in images" :key="key" >
            <img :src="image.sizes.thumbnail" alt="">
        </div>

        <button @click="initPs()">
            See all images now
        </button>

    </div>



    <!-- the hidden html for pswp below -->
    <div>
      <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">
          <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
          </div>
          <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
              <div class="pswp__counter"></div>
              <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
              <button class="pswp__button pswp__button--share" title="Share"></button>
              <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
              <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
              <div class="pswp__preloader">
                <div class="pswp__preloader__icn">
                  <div class="pswp__preloader__cut">
                    <div class="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div class="pswp__share-tooltip"></div>
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>
            <div class="pswp__caption">
              <div class="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of pswp html -->
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

        let items= []



        const getSinglePost = () => {
            // axios.get(`https://arjunhadke.in/wp-json/wp/v2/posts/${postID.value}`)
            axios.get(`http://site.local/wp-json/wp/v2/posts/33?_fields=id,acf,title,content`)
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
                    // get the req
                    // postData.value = response.data;
                    // get the title
                    title.value = response.data.title.rendered
                    // get the content
                    content.value = response.data.content.rendered

                    // get the image gallery

                    images.value = response.data.acf.image_gallery


                    // for the total number of full images, push each one into the items arr
                    let lengthOfImagesArr = response.data.acf.image_gallery.length


                    // console.log(response.data.acf.image_gallery[2].height)
                    // console.log(response.data.acf.image_gallery[2].width)
                
                    for(var i = 0; i < lengthOfImagesArr; i++ ) {
                        // items.push(response.data.acf.image_gallery[i].url)
                        items.push(
                            {
                                src: response.data.acf.image_gallery[i].url,
                                w: response.data.acf.image_gallery[i].width,
                                h: response.data.acf.image_gallery[i].height,
                            } 
                        )
                    }

                    console.log(items)




                })
                .catch(error => {
                    console.log(error);
                });
        }

        getSinglePost()


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
            title, content,
            images, thumbs,
            initPs
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