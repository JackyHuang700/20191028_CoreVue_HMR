<template>
  <div>
    <span>DefaultContainer</span>
    <div>
      <span>
        <button type="button" @click="acitonSetNumber(1)">+</button>
      </span>
      <span>
        <span>&nbsp;&nbsp;getNumber:&nbsp;</span>
        <span>{{ getNumber }}</span>
        <span>
          &nbsp;&nbsp;
          <button type="button" @click="acitonSetNumber(-1)">-</button>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { defaultContainer } from '../store/modules/modulesName'
export default {
  name: 'DefaultContainer',
  methods: {
    ...mapActions({
      acitonSetNumber: `${defaultContainer}/acitonSetNumber`
    })
  },
  computed: {
    ...mapGetters({
      getNumber: `${defaultContainer}/getNumber`
    })
  }
}
</script>

<style>
</style>
