<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <!-- <router-view /> -->
    <div class="home">
      <img alt="Vue logo" src="../../assets/images/logo.png" />
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
      <div>
        <HelloWorld msg="Welcome to Your Vue.js App" @click.native="consoMsg" />
      </div>
    </div>
  </div>
</template>

<script>
// vuex
import { mapGetters, mapActions } from 'vuex'
import { defaultContainer } from '@/store/modules/modulesName'

// @ is an alias to /src
import HelloWorld from '@/views/HelloWorld.vue'

export default {
  name: 'DefaultContainerByCli',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters({
      getNumber: `${defaultContainer}/getNumber`
    })
  },
  methods: {
    ...mapActions({
      acitonSetNumber: `${defaultContainer}/acitonSetNumber`
    }),
    consoMsg () {
      console.log('click event is happen')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
