import sailsIO from 'sails.io.js'
import socketIO from 'socket.io-client'

export default {
  install (Vue, options) {
    const io = sailsIO(socketIO)

    io.sails.url = options

    Vue.prototype.$sails = io
  }
}