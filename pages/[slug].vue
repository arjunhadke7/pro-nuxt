<template>

    <div class="container mx-auto w-[97%] md:w-4/5 singlepost">
        <h1 class="text-4xl mb-6" v-html="title"></h1>
        <div class="text-md" v-html="content"></div>
    </div>

</template>


<script>
import axios from 'axios'

definePageMeta({
    layout: 'blog'
})
export default {
    setup() {
        let postData = ref([])
        let title = ref('')
        let  content = ref('')
        // let  postID = ref(2077)


        const getSinglePost = () => {
            axios.get(`https://arjunhadke.in/wp-json/wp/v2/posts/`)
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
                    postData.value = response.data;
                    title.value = postData.value.title.rendered
                    content.value = postData.value.content.rendered
                    // console.log(some.value)
                })
                .catch(error => {
                    console.log(error);
                });
        }

        getSinglePost()

        return {
            getSinglePost, postData, title, content, postID
        }
    }
}
</script>


<style>
    .singlepost > div > p {
        margin-bottom: 12px;
    }
    .singlepost > div > p > a {
        color:  #008ae6;
    }
</style>