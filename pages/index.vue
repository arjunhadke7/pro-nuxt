<template>

  <div>

    <IntroBanner 
    :name="name" 
    :intro="intro"
    :info="info" 
    />

    <!-- <Coffee /> -->
  </div>






</template>



<script setup>

definePageMeta({
  layout: 'landing'
});

let name = ref('Arjun Hadke')
let intro = ref('Mobile and Web Software Craftsman.')
let info = ref('I build stunning User Interfaces with best of the latest tools and code')

</script>

