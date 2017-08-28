<template>
  <nav class="status-bar">
    <div class="container d-flex">
      <div class="indicator">
        <div class="service">Stream</div>
        <div class="state" :class="{'offline': stream == null, 'online': stream != null}">
          <span v-if="stream == null">Offline</span>
          <span v-else>Live</span>
        </div>
      </div>

      <div class="indicator" v-if="bots">
        <div class="service">Discord Bot</div>
        <div class="state" :class="{'offline': bots.discord.status != 0, 'online': bots.discord.status == 0}">
          <span v-if="bots.discord.status == 0">Connected</span>
          <span v-else>Offline</span>
        </div>
      </div>

      <div class="indicator" v-if="bots">
        <div class="service">Twitch Bot</div>
        <div class="state" :class="{'offline': bots.twitch.status != 'OPEN', 'online': bots.twitch.status == 'OPEN'}">
          <span>{{ bots.twitch.status }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      stream: null,
      bots: null
    }
  },

  created () {
    this.getStatus()

    this.$sails.socket.get('/status/subscribe')
    this.$sails.socket.on('twitch:status', this.getStatus)
    this.$sails.socket.on('bots:status', this.getStatus)
    this.$sails.socket.on('stream:status', (data) => {
      this.stream = data
    })
  },

  methods: {
    getStatus () {
      this.$http.get('status/stream')
        .then(res => this.stream = res.data)

      this.$http.get('status/bots')
        .then(res => this.bots = res.data)
    }
  }
}
</script>
