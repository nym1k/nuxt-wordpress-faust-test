<template>
  <div>
    <div class="mt-4 space-y-2">
      <BlockRenderer
        v-bind="{ blocks: data.blocks }"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const config = useRuntimeConfig();
const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
  method: 'get',
  query: {
    query: `
      query MyQuery3 {
        nodeByUri(uri: "/") {
          __typename
          ... on ContentType {
            id
            name
          }
          ... on Page {
            id
            title
            blocks {
              attributesJSON
              dynamicContent
              originalContent
              isDynamic
              name
              order
            }
          }
        }
      }`
  },
  transform (data) {
    return data.data.nodeByUri
  }
})
</script>


