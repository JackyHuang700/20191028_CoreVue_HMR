<template>
    <button typr="button" @click="PropInEventsOut">Click</button>
</template>

<script>
import {
  eventBus,
  EVENTBUS_CALCOUNT
} from '@/store/eventBus'
export default {
  name: 'PropInEventsOut',
  props: {
    count: {
      type: Number,
      require: true
    }
  },
  methods: {
    PropInEventsOut () {
      // 觸發事件
      eventBus.$emit(EVENTBUS_CALCOUNT, 1)
    }
  }
}
</script>

<style>

</style>
