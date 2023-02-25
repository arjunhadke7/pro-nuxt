

<script>
import axios from 'axios';
// import { BlogComp } from '~~/.nuxt/components';
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
          console.log(posts.value)
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
</script>

<style>
.paras>p {
  margin-bottom: 10px;
}
</style>

<template>
  <Header />
  <div v-for="post in posts" :key="post.id">
    <!-- {{ post.title.rendered }} -->
    <div class="mb-10" v-html="post.title.rendered"></div>
    <!-- <BlogComp :hello="post.title.rendered"/> -->
  </div>



  <!-- <section>
    <div v-for="post in posts" :key="post.title.rendered">

    
  <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
    <div class="relative mx-auto max-w-7xl">
      <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div class="flex-shrink-0">
            <img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1561654791-00316c79efa8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="">
          </div>
          <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <div class="flex-1">
              <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-neutral-600">{{ post.title.rendered }}</p>
                <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section> -->


</template>