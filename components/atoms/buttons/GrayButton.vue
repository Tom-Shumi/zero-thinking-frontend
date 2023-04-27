<template>
  <DefaultButton
    :label="label"
    :on-click="onClick"
    buttonClass="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
  />
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
