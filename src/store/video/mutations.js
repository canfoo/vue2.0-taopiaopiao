export default {
  playVideo (state, { audio }) {
  	state.url = audio.url 
  	state.cover = audio.cover
  	state.playStatus = true
  },
  pauseVideo (state) {
  	state.playStatus = false
  }
}
