<template>
  <div class="text-center"><h1 class="text-7xl font-bold m-5">60</h1></div>
  <div class="mt-5 ml-20">
    <div><label for="title">テーマ</label></div>
    <div class="mb-8">
      <input type="text" id="title" name="title" class="border w-4/5" />
    </div>
  </div>
  <div class="mb-5 text-center">
    <PrimaryButton label="START" :on-click="handleStart" />
  </div>
  <div class="ml-8 mr-8">
    <hr class="w-full" />
  </div>
  <div class="mt-5 ml-20">
    <label for="thinking">深掘り</label>
    <div class="mb-8">
      <input type="text" name="thinking" class="border w-3/5" />
    </div>
  </div>
</template>

<script lang="ts">
  import PrimaryButton from '~/components/atoms/buttons/PrimaryButton.vue'

  export default defineComponent({
    components: { PrimaryButton },
    setup() {
      const handleStart = () => {
        console.log('start')
      }

      return {
        handleStart
      }
    }
  })
</script>
