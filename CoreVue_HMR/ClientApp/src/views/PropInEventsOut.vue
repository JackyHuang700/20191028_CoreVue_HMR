<template>
    <button typr="button" @click="PropInEventsOut">you clicked me {{ count }} times</button>
</template>

<script>
import {
  eventBus,
  EVENTBUS_CALCOUNT,
  EVENTBUS_RESETCOUNT
} from '@/store/eventBus'
export default {
  name: 'PropInEventsOut',
  props: {
    initialCounter: {
      type: Number,
      require: true,
      default: 0
    }
  },
  created () {
    eventBus.$on(EVENTBUS_RESETCOUNT, this.reset)
  },
  destroyed () {
    eventBus.$off(EVENTBUS_RESETCOUNT, this.reset)
  },
  data () {
    return {
      count: this.initialCounter
    }
  },
  methods: {
    PropInEventsOut () {
      // 觸發事件
      this.count++
      eventBus.$emit(EVENTBUS_CALCOUNT, 1)
    },
    reset () {
      this.count = 0
    }
  }
}
</script>

<style>

</style>
