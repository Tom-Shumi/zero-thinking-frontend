<template>
  <div class="ml-20 mt-5 text-gray-500 text-lg">
    {{ thinkingTree.insert_date.slice(0, 10) }}
  </div>
  <div class="ml-20 text-2xl font-bold underline">
    {{ thinkingTree.theme }}
  </div>
  <div class="ml-20 mt-5">
    {{ thinkingTree.thinking_tree }}
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
  const { id } = route.params
  const { fetch } = useClient()
  const { data: response } = await fetch(`/v1/thinkingTree/${id}`)
  const thinkingTree = response.value.result
</script>
<script lang="ts">
  export default defineComponent({})
  definePageMeta({
    middleware: 'auth'
  })
</script>
