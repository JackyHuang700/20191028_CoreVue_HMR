<template>
  <div class="app">
    <DefaultHeader/>
    <!-- <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>

    </div> -->
    <DefaultFooter/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { defaultContainer } from '@/store/modules/modulesName'
// -- coreUI --
import DefaultHeader from './DefaultHeader'
import DefaultFooter from './DefaultFooter'

export default {
  name: 'DefaultContainer',
  components: {
    DefaultFooter,
    DefaultHeader
  },
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
