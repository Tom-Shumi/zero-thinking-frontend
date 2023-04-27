<template>
  <div class="text-2xl">
    <nav class="border-b-2">
      <nuxt-link to="/">
        <h1 class="text-3xl font-bold underline m-5">ゼロ秒思考</h1>
      </nuxt-link>
    </nav>
    <slot />
  </div>
</template>

<script lang="ts">
  console.log('loaded')
</script>
