<template>
  <div>
    <h3>取得系統參數</h3>
    <div>GetSystemParameter: {{ this.$hostName }}</div>
    <div>GetSystemParameter: {{ getSystemParameter }}</div>
  </div>
</template>

<script>
export default {
  name: 'GetSystemParameter',
  computed: {
    getSystemParameter () {
      return this.$hostName
    }
  }
}
</script>

<style>
</style>
