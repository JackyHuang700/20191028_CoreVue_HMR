<template>
  <button type="button" @click="reset">reset</button>
</template>

<script>
import {
  eventBus,
  EVENTBUS_RESETCOUNT
} from '@/store/eventBus'
export default {
  name: 'PropInEventsOut2',
  methods: {
    reset () {
      eventBus.$emit(EVENTBUS_RESETCOUNT)
    }
  }
}
</script>

<style>

</style>
