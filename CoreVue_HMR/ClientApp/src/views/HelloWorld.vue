<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
          target="_blank"
          rel="noopener"
        >router</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
          target="_blank"
          rel="noopener"
        >vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
      </li>
    </ul>

    <div>
      <button type="buton">click native demo</button>
    </div>
    <div>
      <h3>props in, events out demo</h3>
      <p>totleCount: {{totleCount}}</p>
      <PropInEventsOut :initialCounter=2></PropInEventsOut>
      <PropInEventsOut :initialCounter=3></PropInEventsOut>
      <PropInEventsOut2></PropInEventsOut2>
      <ComputedGetSet></ComputedGetSet>
    </div>
  </div>
</template>

<script>
import PropInEventsOut from '@/views/PropInEventsOut.vue'
import PropInEventsOut2 from '@/views/PropInEventsOut2.vue'
import ComputedGetSet from '@/views/ComputedGetSet.vue'
import {
  eventBus,
  EVENTBUS_CALCOUNT,
  EVENTBUS_RESETCOUNT
} from '@/store/eventBus'
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
      validator: function (value) {
        return value !== undefined
      },
      require: false
    }
  },
  components: {
    PropInEventsOut,
    PropInEventsOut2,
    ComputedGetSet
  },
  data () {
    return {
      totleCount: 5
    }
  },
  created () {
    eventBus.$on(EVENTBUS_CALCOUNT, count => {
      this.totleCount = this.totleCount + count
    })
    eventBus.$on(EVENTBUS_RESETCOUNT, this.reset)
  },
  beforeDestroy () {
    // 清除所監聽的所有事件
    eventBus.$off(EVENTBUS_CALCOUNT)
    eventBus.$off(EVENTBUS_RESETCOUNT, this.reset)
  },
  methods: {
    reset () {
      this.totleCount = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
