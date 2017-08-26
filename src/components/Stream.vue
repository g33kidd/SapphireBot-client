<template>
  <div class="stream">
    <div class="container">
      <current-stream class="col-3" :editable="true" :stream="stream"></current-stream>
      <event-viewer class="col-9"></event-viewer>
    </div>
  </div>
</template>

<script>
import CurrentStream from '@/components/CurrentStream'
export default {
  components: { CurrentStream },

  data () {
    return {
      stream: null
    }
  },

  created () {
    this.$http.get('twitch/live')
      .then(res => {
        this.stream = res.data
      })
  }
}
</script>