<template>
  <div id="app">
    <navbar></navbar>
    <status-bar></status-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import StatusBar from '@/components/StatusBar'

export default {
  name: 'app',
  components: { Navbar, StatusBar }
}
</script>