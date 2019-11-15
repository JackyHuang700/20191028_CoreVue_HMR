<template>
  <div>
    <h3>computed get set example</h3>
    <p>1 日幣 = 0.278 台幣</p>
    <p>1 美金 = 30.645 台幣</p>
    <div>
      台幣
      <input type="text" v-model="twd" />
    </div>
    <div>
      日幣
      <input type="text" v-model="jpy" />
    </div>
    <div>
      美金
      <input type="text" v-model="usd" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComputedGetSet',
  data: function () {
    return {
      twd: 1
    }
  },
  computed: {
    jpy: {
      get: function () {
        return Number.parseFloat(Number(this.twd) / 0.278).toFixed(3)
      },
      set: function (val) {
        this.twd = Number.parseFloat(Number(val) * 0.278).toFixed(3)
      }
    },
    usd: {
      get: function () {
        return Number.parseFloat(Number(this.twd) / 30.645).toFixed(3)
      },
      set: function (val) {
        this.twd = Number.parseFloat(Number(val) * 30.645).toFixed(3)
      }
    }
  }
}
</script>

<style>
</style>
