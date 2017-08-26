<template>
  <div class="events">
    <p class="test">Events</p>
    <div class="event" v-for="event in events" :key="event">
      {{ event }}
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      events: []
    }
  },

  // Do some events stuff!!!! 
  // Follow alerts, bits, etc...
  created () {
    this.$sails.socket.get('/twitch/subscribe')
    this.$sails.socket.on('twitch:join', this.joined)
  },

  methods: {
    joined (data) {
      this.events.push({ type: 'join', username: data.username })
    }
  }
}
</script>

