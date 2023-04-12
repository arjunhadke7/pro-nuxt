<template>
    <div>
        <div v-for="t in posts">
            <SingleBlog>
                <template #seo><span v-html="t.yoast_meta"></span></template>
                <template #title><span v-html="t.title.rendered"></span></template>
                <template #excerpt><span v-html="t.excerpt.rendered"></span></template>
              </SingleBlog>
              <NuxtLink :to="`/${t.slug}`">Go to full post</NuxtLink>
        </div>
        
    </div>
</template>


<script>
import axios from 'axios';


export default {


  setup() {
    let posts = ref([])

    onMounted(() => {
      getPost();
    })


    const getPost = async () => {
      axios.get('https://arjunhadke.in/wp-json/wp/v2/posts')
        .then(response => {
          posts.value = response.data;

          for(let i = 0; i < posts.value.length; i++) {
            // console.log(posts.value[i].id)
          }
        })
        .catch(error => {
          console.log(error);
        });

    }

    return {
      posts,
      getPost,
    }
  }
}

definePageMeta({
    layout: 'blog'
})
</script>