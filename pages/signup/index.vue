<template>
  <div class="mt-5 ml-20">
    <div><label for="mailAddress">メールアドレス</label></div>
    <div class="mb-8">
      <input type="text" v-model="mailAddress" class="border w-4/5" />
    </div>
  </div>
  <div class="mt-5 ml-20">
    <div><label for="password">パスワード</label></div>
    <div class="mb-8">
      <input type="password" v-model="password" class="border w-4/5" />
    </div>
  </div>
  <div class="text-center">
    <div>
      <PrimaryButton class="my-5" label="登録" :on-click="() => {}" />
    </div>
  </div>
</template>

<script lang="ts">
  import PrimaryButton from '~/components/atoms/buttons/PrimaryButton.vue'

  export default defineComponent({
    components: { PrimaryButton },
    data() {
      return { mailAddress: '', password: '' }
    },
    methods: {}
  })
</script>
