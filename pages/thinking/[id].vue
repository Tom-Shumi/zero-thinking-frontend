<template>
  <div class="ml-20 mt-5 text-gray-500 text-lg">
    {{ thinkingTree.insert_date.slice(0, 10) }}
  </div>
  <div class="ml-20 text-2xl font-bold underline">
    {{ thinkingTree.theme }}
  </div>
  <div class="ml-20 mt-5 pl-5">
    <MdEditor
      :modelValue="thinkingTree.thinking_tree"
      language="en-US"
      :previewOnly="true"
    />
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
  import MdEditor from 'md-editor-v3'
  export default defineComponent({
    components: { MdEditor }
  })
  definePageMeta({
    middleware: 'auth'
  })
</script>
