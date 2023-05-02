<template>
  <div class="text-2xl">
    <nav class="border-b-2 h-20">
      <nuxt-link to="/">
        <span class="text-3xl font-bold underline m-5 float-left"
          >ゼロ秒思考</span
        >
      </nuxt-link>
      <PrimaryButton
        class="m-5 float-right"
        label="マイページ"
        :on-click="handleMoveMypage"
        v-if="isShowLoginedButton"
      />
      <SecondaryButton
        class="m-5 float-right"
        label="ログアウト"
        :on-click="handleLogout"
        v-if="isShowLoginedButton"
      />
      <PrimaryButton
        class="m-5 float-right"
        label="ログイン"
        :on-click="handleMoveLogin"
        v-if="!isShowLoginedButton"
      />
      <SecondaryButton
        class="m-5 float-right"
        label="ユーザ登録"
        :on-click="handleMoveSignUp"
        v-if="!isShowLoginedButton"
      />
    </nav>
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isShowLoginedButton = ref(false)
  const setIsLogin = async () => {
    const { isLogin } = useAuth()
    isShowLoginedButton.value = await isLogin()
  }

  onMounted(async () => {
    setIsLogin()
  })

  onUpdated(async () => {
    setIsLogin()
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
      },
      async handleLogout() {
        if (confirm('ログアウトしますか？')) {
          const { logout } = useAuth()
          await logout()
          location.reload()
          return navigateTo('/')
        }
      }
    }
  })
</script>
