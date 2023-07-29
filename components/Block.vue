<template>
  <CoreParagraph v-if="name === 'core/paragraph'" :content="content" />
  <!-- <CoreImage v-if="name === 'core/image'" :block="block"></CoreImage> -->
  <HomeHero v-if="name === 'acf/home-hero'" v-bind="{ blockData }" />
</template>
    
<script setup>
const props = defineProps({
  blockData: Object,
  content: String,
  name: String
})
</script>