<template>
  <DefaultButton :label="label" :on-click="onClick" />
</template>

<script lang="ts">
  import DefaultButton from '~/components/atoms/buttons/DefaultButton.vue'

  export default defineComponent({
    components: { DefaultButton },
    props: {
      label: {
        type: String,
        default: 'ボタン'
      },
      onClick: {
        type: Function as PropType<() => void>,
        required: true
      }
    }
  })
</script>
