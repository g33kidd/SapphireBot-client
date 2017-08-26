<template>
  <div class="current-stream">
    <div class="info" v-if="stream && stream.channel">
      <img :src="stream.preview.large" class="preview-img">
      <div class="extra">
        <div class="viewers">Viewers {{ stream.viewers }}</div>
      </div>

      <div class="edit" v-if="editable">
        <input type="text" class="form-control" name="title" v-model="edit.title">
        <input type="text" class="form-control" name="game" v-model="edit.game">
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
      edit: {
        title: '',
        game: ''
      }
    }
  },

  beforeUpdate () {
    if (typeof(this.stream.channel) != 'undefined') {
      this.edit.title = this.stream.channel.status
      this.edit.game = this.stream.game
    }
  },

  created () {
    
  }
}
</script>

<style lang="scss">
.preview-img {
  width: 100%;
}
</style>
