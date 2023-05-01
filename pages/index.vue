<template>
  <div class="text-center">
    <div class="text-3xl font-bold my-5">すぐ始める</div>
    <div class="my-5">
      <PrimaryButton class="mx-5" label="スタート" :on-click="handleStart" />
    </div>
  </div>
</template>

<script lang="ts">
  import PrimaryButton from '~/components/atoms/buttons/PrimaryButton.vue'

  export default defineComponent({
    components: { PrimaryButton },
    methods: {
      handleStart() {
        return navigateTo('/thinking')
      }
    }
  })
</script>
