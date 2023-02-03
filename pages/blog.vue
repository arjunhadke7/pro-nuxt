<template>
    <div>
        <div v-for="t in posts">
            <!-- <div class="pb-5" v-html="t.excerpt.rendered"></div> -->
            <SingleBlog>
                <template #title>{{ t.title.rendered }}</template>
                <template #excerpt>{{ t.excerpt.rendered }}</template>
            </SingleBlog>
        </div>
        
        
        <!-- <AlertNormal>
            <template #name>Arjun Hadke</template>
            <template #info>This is some information about arjuna.</template>

        </AlertNormal> -->
    </div>
</template>


<script>
import axios from 'axios';
export default {
  setup() {
    let posts = ref([])
    let name = ref('arjun hadke post here')

    onMounted(() => {
      getPost();
    })


    const getPost = async () => {
      axios.get('https://arjunhadke.in/wp-json/wp/v2/posts')
        .then(response => {
          posts.value = response.data;
        //   console.log(posts.value[0].title.rendered)
        })
        .catch(error => {
          console.log(error);
        });

    }



    return {
      posts,
      getPost,
      name
    }
  }
}

definePageMeta({
    layout: 'blog'
})
</script>