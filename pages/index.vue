<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
  method: 'post',
  body: {
    query: `
      query NewQuery {
        posts(first:10){
          nodes {
            title
            date
            excerpt
            uri
            featuredImage {
              node {
                id
                sourceUrl
              }
            }
          }
        }
      }`
    },
    transform(data) {
      return data.data.posts.nodes as Array<Record<'title' | 'date' | 'excerpt' | 'uri' | 'featuredImageId', string>>
    }
})
</script>

<template>
  <div>
    <TheHeader/>
    <div class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
      <Post
        v-for="post in data"
        :key="post.uri"
        v-bind="{ post }"
      />
    </div>
  </div>
</template>
