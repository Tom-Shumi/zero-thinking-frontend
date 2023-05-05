<template>
  <div class="mt-5 ml-20 text-2xl font-bold underline">過去のゼロ秒思考</div>
  <div v-if="thinkingTreeList.length">
    <article
      class="ml-20"
      v-for="thinkingTree in thinkingTreeList"
      :key="thinkingTree.id"
    >
      <nuxt-link :to="`/thinking/${thinkingTree.id}`">
        <div class="ml-10 mt-5 text-gray-500 text-lg">
          {{ thinkingTree.insert_date.slice(0, 10) }}
        </div>
        <div class="ml-10">{{ thinkingTree.theme }}</div>
      </nuxt-link>
    </article>
  </div>
  <div v-else class="ml-20 mt-5 pl-10 text-gray-500">データが存在しません</div>
</template>

<script setup lang="ts">
  const { fetch } = useClient()
  const { data: response } = await fetch('/v1/thinkingTree')
  const thinkingTreeList = response.value.result
</script>
<script lang="ts">
  export default defineComponent({})
  definePageMeta({
    middleware: 'auth'
  })
</script>
