<template>
  <div class="text-3xl font-bold underline">0秒思考</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      const version = 2 + 1

      return { version: version }
    }
  })
</script>
