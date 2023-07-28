<template>
  <NuxtLink :to='post.uri'>
    <div class="flex 
        items-center 
        bg-gradient-to-r
        from-cyan-500 
        to-blue-500 
        p-8 
        rounded-lg 
        text-white 
        transition-all 
        hover:-translate-y-1 
        hover:scale-105">
      <div class="w-full">
        <div class="relative pb-[100%] mb-4 w-full overflow-hidden">
          <img
            v-bind="{
              alt: post.title,
              src: post.featuredImage.node.sourceUrl
            }"
            class="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <h2 class="font-semibold text-2xl">{{ post.title }}</h2>
        <p>{{ new Date(post.date).toLocaleDateString() }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  post: Record<'title' | 'date' | 'excerpt' | 'uri' | 'featuredImageId', string>
}>();
</script>