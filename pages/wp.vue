

<script>
import axios from 'axios';
import Singlepost from './singlepost.vue';
// import { BlogComp } from '~~/.nuxt/components';
export default {
  setup() {
    let posts = ref([])

    const route = useRoute()
    

    onMounted(() => {
      getPost();
      // console.log(`${useRuntimeConfig().url}${useRuntimeConfig().append}/products`)
    })


    const getPost = async () => {
      axios.get('https://arjunhadke.in/wp-json/wp/v2/posts')
      // axios.get(`${useRuntimeConfig().url}${useRuntimeConfig().append}/products?_fields=id,description,slug,name`,
      // {
      //   auth: {
      //     username: useRuntimeConfig().username,
      //     password: useRuntimeConfig().password
      //   }
      // }

      // )

        .then(response => {
          posts.value = response.data;
          // console.log(posts.value)
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });

        console.log(route.params.id)
    }

    // const handleRedirect = (id) => {
    //   console.log(id)
    // }



    return {
      posts,
      getPost,
      // handleRedirect,
      Singlepost,
      route
    }
  }
}
</script>

<style>
.paras>p {
  margin-bottom: 10px;
}
</style>

<template>
  <Header />
  <div v-for="post in posts" :key="post">
    <NuxtLink to="Singlepost">
      <!-- TODO replace the singlepost from URL in the address bar, with slug received from the rest api -->
      <!-- TODO replace the URLS in post content with router links to that of the nuxt links with slug -->
      <div class="ml-4">
        <span v-html="post.title.rendered"> </span>
        {{ post.id }}
      </div>
  </NuxtLink>
    <!-- <div class="mb-10" v-html="post.title.rendered"></div> -->
    <!-- <BlogComp :hello="post.title.rendered"/> -->
  </div>



</template>