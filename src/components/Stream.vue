<template>
  <div class="stream">
    <div class="container mt-2">
      <div class="row">
        <current-stream class="col-3" :editable="true" :stream="stream"></current-stream>
        <event-viewer class="col-9"></event-viewer>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentStream from '@/components/CurrentStream'
import EventViewer from '@/components/EventViewer'
export default {
  components: { CurrentStream, EventViewer },

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