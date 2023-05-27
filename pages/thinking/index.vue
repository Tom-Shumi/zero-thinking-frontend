<template>
  <div class="text-center">
    <h1 class="text-7xl font-bold m-5">{{ remainingTime }}</h1>
  </div>
  <div class="mt-5 ml-20">
    <div><label for="theme">テーマ</label></div>
    <div class="mb-8">
      <input type="text" v-model="theme" class="border w-4/5" />
    </div>
  </div>
  <div class="mb-5 text-center">
    <PrimaryButton
      class="mx-5"
      label="スタート"
      :on-click="handleStart"
      v-show="!isTimerOn"
    />
    <SecondaryButton
      class="mx-5"
      label="ストップ"
      :on-click="handleStop"
      v-show="isTimerOn"
    />
    <GrayButton class="mx-5" label="リセット" :on-click="handleReset" />
  </div>
  <div class="ml-8 mr-8">
    <hr class="w-full" />
  </div>
  <div class="mt-5 ml-20">
    <label for="thinkingTree">深掘り【マークダウン記法】</label>
    <div class="mr-20 mb-10">
      <MdEditor
        v-model="thinkingTree"
        language="en-US"
        :disabled="!isTimerOn"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import PrimaryButton from '~/components/atoms/buttons/PrimaryButton.vue'
  import SecondaryButton from '~/components/atoms/buttons/SecondaryButton.vue'
  import GrayButton from '~/components/atoms/buttons/GrayButton.vue'
  import MdEditor from 'md-editor-v3'
  import 'md-editor-v3/lib/style.css'

  const THINKING_TIME = 900

  export default defineComponent({
    components: { PrimaryButton, SecondaryButton, GrayButton, MdEditor },
    data() {
      return {
        remainingTime: THINKING_TIME,
        isTimerOn: false,
        timerObj: undefined as NodeJS.Timer | undefined,
        theme: '',
        thinkingTree: ''
      }
    },
    methods: {
      handleStart() {
        if (this.theme == '') {
          alert('テーマを入力してください')
          return
        }
        const self = this
        this.remainingTime = THINKING_TIME
        this.timerObj = setInterval(function () {
          self.countDown()
        }, 1000)
        this.isTimerOn = true
      },
      handleStop() {
        clearInterval(this.timerObj)
        this.isTimerOn = false
      },
      handleReset() {
        this.handleStop()
        this.init()
      },
      countDown() {
        this.remainingTime = this.remainingTime - 1
      },
      init() {
        this.remainingTime = THINKING_TIME
        this.theme = ''
        this.thinkingTree = ''
      },
      async timeup() {
        this.handleStop()

        const { isLogin } = useAuth()
        if (!(await isLogin())) {
          if (
            confirm(
              'ログイン or 会員登録をしていないので、\n内容を登録できません。\n\nログイン画面に遷移しますか？'
            )
          ) {
            return navigateTo('/login')
          } else {
            this.init()
            return
          }
        }

        if (confirm('時間切れです！\n\nテーマ & 深掘りを登録しますか？')) {
          await this.saveThinkingTree()
          alert('登録が完了しました！')
        } else if (
          confirm(
            'このままでは、内容は消えてしまいます。\n\n本当はテーマ & 深掘りを登録しますか？'
          )
        ) {
          await this.saveThinkingTree()
          alert('登録が完了しました！')
        } else {
          alert('登録せずに終了しました！')
        }
        this.init()
      },
      async saveThinkingTree() {
        const { post } = useClient()
        await post(`/v1/thinkingTree`, {
          theme: this.theme,
          thinkingTree: this.thinkingTree
        })
      }
    },
    watch: {
      remainingTime(_, oldVal) {
        if (oldVal == 0) {
          this.timeup()
        }
      }
    }
  })
</script>
