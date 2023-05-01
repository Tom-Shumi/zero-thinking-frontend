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
        label="マイページ"
        :on-click="handleMoveMypage"
        v-if="isShowMyPageButton"
      />
      <SecondaryButton
        class="m-5 float-right"
        label="ログイン"
        :on-click="handleMoveLogin"
        v-if="!isShowMyPageButton"
      />
      <PrimaryButton
        class="m-5 float-right"
        label="ユーザ登録"
        :on-click="handleMoveSignUp"
        v-if="!isShowMyPageButton"
      />
    </nav>
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const { isLogin } = useAuth()
  const isShowMyPageButton = ref(await isLogin())

  onUpdated(async () => {
    const { isLogin } = useAuth()
    isShowMyPageButton.value = await isLogin()
  })
</script>

<script lang="ts">
  import SecondaryButton from '~/components/atoms/buttons/SecondaryButton.vue'
  import PrimaryButton from '~/components/atoms/buttons/PrimaryButton.vue'

  export default defineComponent({
    components: { SecondaryButton, PrimaryButton },
    data() {
      return { isLogin: false }
    },
    methods: {
      handleMoveMypage() {
        return navigateTo('/mypage')
      },
      handleMoveLogin() {
        return navigateTo('/login')
      },
      handleMoveSignUp() {
        return navigateTo('/signup')
      }
    }
  })
</script>
