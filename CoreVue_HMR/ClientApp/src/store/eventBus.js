import Vue from 'vue'

export const eventBus = new Vue()

// -- 註冊成全局 --
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return eventBus
    }
  }
})
// -- 註冊成全局 use --
// this.$bus.$emit('nameOfEvent',{ ... pass some event data ...});

// this.$bus.$on('nameOfEvent',($event) => {
// // ...
// })

// eventBus Type
export const EVENTBUS_CALCOUNT = 'EVENTBUS_CALCOUNT'
export const EVENTBUS_RESETCOUNT = 'EVENTBUS_RESETCOUNT'
