<template> 
    <div class="relative">
    <!-- <img class="object-cover w-full h-screen sm:h-4/5 md:h-4/5 lg:h-screen"
      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt=""> -->
    <img class="object-cover w-full h-screen sm:h-4/5 md:h-4/5 lg:h-screen"
      src="../assets/landing-ah.webp"
      alt="">
    <div
      class="absolute inset-0 bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25 bg-gradient-to-b from-white/90 via-white/75 to-white/20">

      <div class="absolute bottom-1/3 sm:bottom-1/4 lg:bottom-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 ">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-5xl font-[600] sm:text-5xl sm:text-black lg:text-7xl mb-1 text-black">
            <!-- Arjun Hadke -->
            {{ name }}
          </h1>
          <strong class="block font-[300]  text-black sm:text-black text-2xl sm:text-2xl lg:text-2xl mb-3">
            <!-- Mobile and Web Software Craftsman. -->
            {{ intro }}
          </strong>

          <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-black sm:text-black">
            {{ info }}
          </p>

          <div class="mt-8 mb-6 flex gap-4 text-center">
            <NuxtLink to="/blog"
              class="inline-block w-1/2 sm:w-2/5 rounded bg-green-600 px-3 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-black focus:outline-none focus:ring active:bg-rose-500">
              Blog
            </NuxtLink>

            <a href="#"
              class="inline-block w-1/2 sm:w-2/5 rounded bg-white px-3 py-3 text-sm font-medium text-black shadow hover:text-rose-700 focus:outline-none focus:ring active:text-green-500">
              Work
            </a>
          </div>
          <!-- <a href="#"
            class="block w-full sm:w-2/5 rounded bg-transparent px-3 py-3 text-sm font-medium text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-green-500 border-2 border-gray-600">
            Read more
          </a> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
defineProps(['name', 'intro', 'info'])
</script>