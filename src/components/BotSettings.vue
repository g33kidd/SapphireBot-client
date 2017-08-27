<template>
  <div class="bot-settings">
    <div class="container mt-2">

      <div class="row">
        <bot-commands class="col-6"></bot-commands>
      </div>

    </div>
  </div>
</template>

<script>
import BotCommands from '@/components/BotCommands'
export default {
  components: { BotCommands }
}
</script>
