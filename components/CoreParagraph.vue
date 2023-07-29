<template>
  <p v-html="content" />
</template>
   
<style >
a {
  color: blue;
  text-decoration: underline;
}
</style>
   
<script setup>
const props = defineProps({
  content: String
})
</script>