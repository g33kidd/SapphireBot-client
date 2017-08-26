<template>
  <div class="current-stream">
    <div class="info" v-if="stream && stream.channel">
      <img :src="stream.preview.large" class="preview-img">
      <div class="extra">
        <div class="viewers">Viewers {{ stream.viewers }}</div>
        <div class="chatters" v-if="chatters">Chatters {{ chatters.chatter_count }}</div>
      </div>

      <div class="edit" v-if="editable">
        <input type="text" class="form-control" name="title" v-model="edit.status" :placeholder="stream.channel.status">
        <input type="text" class="form-control" name="game" v-model="edit.game" :placeholder="stream.game">

        <button class="btn btn-primary" @click="updateChannel">Update</button>
      </div>
    </div>
    <div class="offline" v-else>
      <p>Stream is offline</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'current-stream',
  props: ['stream', 'editable'],

  data () {
    return {
      chatters: null,
      edit: {
        status: '',
        game: ''
      }
    }
  },

  created () {
    this.$http.get('twitch/chatters').then(console.log)
  },

  methods: {
    updateChannel () {
      this.$http.post('twitch/updateChannel', this.edit)
        .then(console.log)
    }
  }
}
</script>

<style lang="scss">
.preview-img {
  width: 100%;
}
</style>
