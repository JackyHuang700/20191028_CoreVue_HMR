<template>
  <div class="app">
    <DefaultHeader />

    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader />
        <SidebarForm />
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter />
        <SidebarMinimizer />
      </AppSidebar>
      <main class="main">
         <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside />
      </AppAside>
    </div>

    <DefaultFooter />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { defaultContainer } from '@/store/modules/modulesName'
import DefaultAside from './DefaultAside'
// -- coreUI --
import {
  Sidebar as AppSidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  Aside as AppAside,
  Breadcrumb
} from '@coreui/vue'
import DefaultHeader from './DefaultHeader'
import DefaultFooter from './DefaultFooter'
import nav from '@/assets/setting/coreui/_nav'

export default {
  name: 'DefaultContainer',
  components: {
    DefaultFooter,
    DefaultHeader,
    DefaultAside,
    Breadcrumb,
    AppSidebar,
    SidebarHeader,
    SidebarForm,
    SidebarFooter,
    SidebarMinimizer,
    SidebarNav,
    AppAside
  },
  data () {
    return {
      nav: nav.items
    }
  },
  methods: {
    ...mapActions({
      acitonSetNumber: `${defaultContainer}/acitonSetNumber`
    })
  },
  computed: {
    ...mapGetters({
      getNumber: `${defaultContainer}/getNumber`
    }),
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter(
        route => route.name || route.meta.label
      )
    }
  }
}
</script>

<style lang="scss">
// CoreUI Icons Set
@import "~@coreui/icons/css/coreui-icons.min.css";
/* Import Font Awesome Icons Set */
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/scss/font-awesome.scss";
/* Import Simple Line Icons Set */
$simple-line-font-path: "~simple-line-icons/fonts/";
@import "~simple-line-icons/scss/simple-line-icons.scss";
/* Import Flag Icons Set */
@import "~flag-icon-css/css/flag-icon.min.css";
/* Import Bootstrap Vue Styles */
@import "~bootstrap-vue/dist/bootstrap-vue.css";
// Import Main styles for this application
@import "@/assets/setting/coreui/scss/style";
</style>
