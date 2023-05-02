<template>
  <div class="text-center">
    <div class="text-3xl font-bold my-5">mypage</div>
  </div>
</template>

<script lang="ts">
  export default defineComponent({})
  definePageMeta({
    middleware: 'auth'
  })
</script>
