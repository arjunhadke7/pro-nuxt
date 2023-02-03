<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>{{ id }} is good and Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, magni.</p>
    </div>
</template>

<script setup>
 const { id } = useRoute().params

 
</script>

<style >

</style>