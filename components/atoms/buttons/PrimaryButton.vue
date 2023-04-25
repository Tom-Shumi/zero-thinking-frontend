<template>
  <button
    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
  import type { PropType } from 'vue'

  export default {
    props: {
      label: {
        type: String,
        default: 'ボタン'
      },
      onClick: {
        type: Function as PropType<() => void>,
        required: true
      }
    },
    setup(props) {
      const handleClick = () => {
        props.onClick()
      }

      return {
        handleClick
      }
    }
  }
</script>
