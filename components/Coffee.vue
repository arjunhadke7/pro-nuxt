<template>
    <div class="relative h-[80vh]">
        <img class="h-[80vh] w-full object-cover" src="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="">
        <div class="absolute inset-0 bg-black opacity-40">
            <!-- black bg with opacity, covers full image because of inset-0 on all screen sizes -->
            <!-- do not change -->
        </div>

        <!-- this is working good for desktop -->
        <!-- <div class="absolute h-40 inset-0 bg-gray-600 opacity-70 text-white m-12 top-auto"> -->
            <!-- this is to make the phone version better, merge the 2 later -->
        <div class="absolute inset-0 h-52 border-2 border-red-500 top-auto bg-gray-600 opacity-70 text-white m-12">
            <!-- the section which is a bg for text -->
        </div>

        <!-- the below section which is the actual content -->
        <div class="absolute inset-0 top-auto bottom-5 text-white m-12 px-12 pb-1 pt-4">
            <h1 class="text-4xl mb-2">
                Hello there!
            </h1>
            <p class="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe animi consequuntur provident soluta. Quisquam illum eius soluta officia enim officiis error, quo dolore neque tempore ipsa? Animi nemo error assumenda?
            </p>
        </div>

    </div>
</template>