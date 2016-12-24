import { UPDATECITY } from './type'

export default {
  [UPDATECITY] (state, { city }) {
  	if (city.name) {
  		state.name = city.name
  		state.data = city.data 
      state.rN = city.rN
  	}
  	state.show = false
  },
  showCityList (state) {
  	state.show = true
  }
}
