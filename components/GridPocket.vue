

<template>
  <div class="container block">
    <ul
     
    role="list"
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
      
      <li class=""  v-for="c in content" :key="c">
        <div class="maindiv block relative h-full " >
          <div class="imgdiv " >
            <img class=""
              src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="example">
          </div>
          <div class="info absolute block sm:hidden top-1/4 left-0 text-center text-white">
            <h2 class="text-lg text-black">{{ c }}{{ c }}{{ c }}{{ c }}{{ c }}{{ c }}{{ c }}{{ c }}</h2>
            <button class="border-2 mx-1 border-black px-4 py-2 text-black mt-2
                    hover:bg-gray-500 hover:text-white 
                    ">
              Read more
            </button>
            <button class="border-2 border-black px-4 py-2 text-black mt-2
                    hover:bg-gray-500 hover:text-white 
                    ">
              See how
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div> 



</template>


<script setup>
// let { content } = defineProps(['items'])

let content = ref(['hello this is something', 'hello this is random', 'hello this is three', 'hello this is four', 'hello this is five', 'hello this is six', ])
</script>


<style>
@media screen and (min-width: 1024px) {
  .maindiv:hover .info {
    display: block;
  }

  .maindiv:hover .imgdiv {
    opacity: 0.2;
  }
}

/* for smaller screens */

@media screen and (max-width: 1023px) {
  .maindiv .info {
  display: block;
}

.maindiv .imgdiv {
  opacity: 0.2;
}
}

</style>