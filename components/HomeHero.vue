<template>
  <div>
    <h1>{{ blockData.data.title }}</h1>
    <p>{{ blockData.data.text }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  blockData: Object
})
</script>