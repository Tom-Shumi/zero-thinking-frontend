<template>
  <div class="text-2xl">
    <nav class="border-b-2 h-20">
      <nuxt-link to="/">
        <span class="text-3xl font-bold underline m-5 float-left"
          >ゼロ秒思考</span
        >
      </nuxt-link>
      <SecondaryButton
        class="m-5 float-right"
        label="MY PAGE"
        :on-click="handleMoveMypage"
      />
    </nav>
    <slot />
  </div>
</template>

<script lang="ts">
  import SecondaryButton from '~/components/atoms/buttons/SecondaryButton.vue'

  export default defineComponent({
    components: { SecondaryButton },
    methods: {
      handleMoveMypage() {
        return navigateTo('/mypage')
      }
    }
  })
</script>
