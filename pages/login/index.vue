<template>
  <div class="mt-5 ml-20 text-2xl font-bold underline">ログイン</div>
  <div class="mt-5 ml-20">
    <div class="ml-10"><label for="email">メールアドレス</label></div>
    <div class="mb-8 ml-10">
      <input type="text" v-model="email" class="border w-4/5" />
    </div>
  </div>
  <div class="mt-5 ml-20">
    <div class="ml-10"><label for="password">パスワード</label></div>
    <div class="mb-8 ml-10">
      <input type="password" v-model="password" class="border w-4/5" />
    </div>
  </div>
  <div class="text-center">
    <div>
      <PrimaryButton class="my-5" label="ログイン" :on-click="login" />
    </div>
    <NuxtLink to="/signup" class="underline text-blue-500">
      ユーザ登録はこちらから
    </NuxtLink>
  </div>
</template>

<script lang="ts">
  import PrimaryButton from '~/components/atoms/buttons/PrimaryButton.vue'

  export default defineComponent({
    components: { PrimaryButton },
    data() {
      return { email: '', password: '' }
    },
    methods: {
      async login() {
        const { login } = useAuth()
        login(this.email, this.password)
      }
    }
  })
</script>
