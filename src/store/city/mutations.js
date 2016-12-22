import { UPDATECITY } from './type'

export default {
  [UPDATECITY] (state, { city }) {
  	if (city.name) {
  		state.name = city.name
  		state.data = city.data 
  	}
  	state.show = false
  },
  showCityList (state) {
  	state.show = true
  }
}
