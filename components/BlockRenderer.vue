<template>
  <div>
    <template
      v-for="(block, blockIndex) in blocks"
      :key="blockIndex"
    >
      <Block
        v-bind="{
          blockData: JSON.parse(block['attributesJSON']),
          content: block['originalContent'],
          name: block['name']
        }"
      />
    </template>
  </div>
</template>
    
<script setup>
const props = defineProps({
  blocks: Array
});
</script>