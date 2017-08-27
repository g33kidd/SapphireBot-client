<template>
  <div class="services" v-if="commandGroups">

    <div class="row">
      <div class="groups col-4" v-for="(commands, service) in commandGroups" :key="service">
        <div class="list-group" role="tablist"></div>
      </div>
    </div>

  </div>
  <div v-else>
    <p>There are no commands for any service. Create some!</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commandGroups: null
    }
  },

  created () {
    this.$http.get('commands/list?group=true').then(res => this.commandGroups = res.data)
  }
}
</script>
