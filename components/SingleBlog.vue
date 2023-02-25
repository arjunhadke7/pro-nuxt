<template>
    <!-- <div class="container mx-auto w-full mb-6">
        <div class=" overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img class="object-cover w-full h-[30vh]"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Article">

            <div class="p-6">
                <div>
                    <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                    <NuxtLink to="/singlepost"
                        class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                        tabindex="0" role="link"> <slot name="title" /> </NuxtLink>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><slot name="excerpt" /></p>
                </div>

                <div class="mt-4">
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <img class="object-cover h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                                alt="Avatar">
                            <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0"
                                role="link">Jone Doe</a>
                        </div>
                        <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <div class="container">
        <div class="card border-2 rounded-md p-4 m-4">
            <!-- <h1 class="text-4xl my-2"><slot name="title" /></h1> -->
            <!-- <p class="text-black"><slot name="excerpt" /></p> -->
            <!-- <p class="text-gray-400"><slot name="id" /></p> -->
            <!-- <NuxtLink to="id" class="text-gray-400"> <slot name="id" /> </NuxtLink> -->
        </div>
    </div>
</template>



<script setup>
// let siteurl = ref('https://arjunhadke.in/wp-json/wp/v2/posts' + id)

// return {
//     siteurl,
//     id
// }
</script>