

<script>
import axios from 'axios';
export default {
    // data() {
    //     return {
    //         posts: [],
    //         error: [],

    //     }
    // },
    setup() {
        let posts = ref([])
        
        // let test = reactive([1,2,3,4,5,6])
        // let i = 0;

        onMounted(() => {
            getPost();
        })


        const getPost = async () => {
            axios.get('https://arjunhadke.in/wp-json/wp/v2/posts?_embed')
                .then(response => {
                    // posts.value = response.data;
                    posts.value = response.data;
                    console.log(posts.value)
                })
                .catch(error => {
                    console.log(error);
                });  
        }   



        return {
            // title, excerpt, content
             posts, 
             getPost,
            // test,
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
    <!-- {{ posts }} -->
    <li v-for="post in posts" :key="post.id">
        {{ post.title.rendered }}
        <!-- <div class="mb-10" v-html="post.title"></div> -->
    </li>



<section>
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
            <!-- <div class="flex items-center mt-6">
              <div class="flex-shrink-0">
                <a href="https://twitter.com/Mike_Andreuzza">
                  <span class="sr-only">Michael Andreuzza</span>
                  <img class="w-10 h-10 rounded-full" src="https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg" alt="">
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-neutral-600">
                  <a href="https://twitter.com/Mike_Andreuzza" class="hover:underline"> Michaerl Andreuzza</a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time datetime="2020-03-16"> Mar 16, 2020 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 6 min read </span>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>


</template>