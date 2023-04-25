<template>
  <div>
    <span class="text-3xl font-bold text-center">すぐ始める</span>
    <PrimaryButton label="START" :on-click="handleClick"></PrimaryButton>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import PrimaryButton from '~/components/atoms/buttons/PrimaryButton.vue'

  export default defineComponent({
    components: { PrimaryButton },
    setup() {
      const handleClick = () => {
        console.log('Button clicked!')
      }

      return {
        handleClick
      }
    }
  })
</script>
