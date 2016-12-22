import Vue from 'vue'
import Vuex from 'vuex'
import videoMutations from './video/mutations'
import loadingMutations from './loading/mutations'
import cityMutations from './city/mutations'
import cityAcions from './city/actions'
import comingMutations from './coming/mutations'
import areaMutations from './cinema/mutations'

Vue.use(Vuex);

const video = {
	state: {
		url: '',
		cover: '',
		playStatus: false
	},
	mutations: videoMutations
}

const loading = {
	state: {
		stack: []
	},
	mutations: loadingMutations
}

const city = {
	state: {
		name: '北京',
		show: false,
		rN: 'bj',
		data: []
	},
	actions: cityAcions,
	mutations: cityMutations
}

const coming = {
	state: {
		lists: []
	},
	mutations: comingMutations
}

const cinema = {
	state: {
		area: []
	},
	mutations: areaMutations
}

export default new Vuex.Store({
 	modules: {
 		video,
 		loading,
 		city,
 		coming,
 		cinema
 	},
})

