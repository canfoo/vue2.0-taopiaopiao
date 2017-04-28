<template>
	<section style="margin-top: 40px;" :class="{mask: showArea}" @click="cancelArea">
		<header class="cm-header pf">
			<div class="mint-1px-r" @click="showCityList">
				<span>{{ cityName }}</span>
				<span class="city-arrow-icon vm"></span>
			</div>
			<div @click="showAreaAction">
				<span>{{ area }}</span>
				<span class="city-arrow-icon vm"></span>
			</div>
		</header>
		<ul class="area-item"  v-show='showArea' @click="selectAreaAction">
			<li>全部区域（{{allArea.length}}）</li>
			<li v-for="item in regionOrder">
				{{ item }}（{{regionCinemas[item].length}}）
			</li>
		</ul>
	</section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default{
	data () {
		return {
			area: '全部区域',
			showArea: false,
			allArea: [],
			regionOrder: [],
			regionCinemas: {}
		}
	},
	methods: {
		...mapMutations([
		  'pushLoadStack',
		  'completeLoad',
		  'showCityList',
		  'updateAreaData'
		]),
		requestData (url, fn) {
		  this.pushLoadStack()
		  this.$http.get(url).then(fn).then(this.completeLoad)
		},
		matchCityStr (str) {
			let randomList = ['bj', 'sh', 'gz']
			let randomCity = randomList[Math.floor(3*Math.random())]
			switch (str) {
				case '北京': return 'bj'
				case '上海': return 'sh'
				case '广州': return 'gz'
				default: return randomCity
			}
		},
		getAreaData (cityName) {
			let cityStr = this.matchCityStr(cityName)
			this.allArea = []
			this.requestData(`/movie/cinema/?city=${cityStr}`, (response) => {
				let data = response.data
				let regionOrder = data.data.data.returnValue.regionOrder
				let regionCinemas = data.data.data.returnValue.regionCinemas
				this.regionOrder = regionOrder
				this.regionCinemas = regionCinemas
				regionOrder.forEach((item) => {
					regionCinemas[item].forEach((cinema) => {
						this.allArea.push(cinema)
					})
				})
			})
		},
		selectAreaAction (event) {
			let str = event.target.innerHTML.trim()
			let reg = /([\u4e00-\u9fa5]*)\（/
			this.area = reg.exec(str)[1]
			this.showArea = false
			document.documentElement.style.overflow = 'scroll'
		},
		showAreaAction () {
			this.showArea = true
			document.documentElement.style.overflow = 'hidden'
		},
		cancelArea (event) {
			if (event.target.className === 'mask') {
				this.showArea = false
				document.documentElement.style.overflow = 'scroll'
			}
		} 
	},
	computed: mapGetters([
	  'cityName'
	]),
	watch: {
		area () {
			if (this.area === '全部区域') {
				this.updateAreaData({area: this.allArea})
			} else {
				this.updateAreaData({area: this.regionCinemas[this.area]})
			}
		},
		cityName () {
			this.getAreaData(this.cityName)
			this.area = '全部区域'
			setTimeout(() => {
				this.updateAreaData({area: this.allArea})
			}, 0)
		}
	},
	created () {
		this.getAreaData(this.$store.state.city.name)
		setTimeout(() => {
			this.updateAreaData({area: this.allArea})
		}, 0)
	}
}
</script>

<style>
.cm-header {
	background: #fafafa;
    color: #333;
    height: 40px;
    line-height: 26px;
    font-size: 14px;
    left: 0px;
    right: 0px;
    top: 0px;
    display: -webkit-box;
    box-sizing: border-box;
    padding: 8px 0;
    border-bottom: 1px solid #ebebeb;
}
.cm-header>div {
	-moz-box-flex: 1.0;
	-webkit-box-flex: 1.0;
	text-align: center;
	box-sizing: border-box;
}
.area-item {
	background-color: #fff;
	font-size: 14px;
	color: #222;
	box-sizing: border-box;
	max-height: 70%;
	padding-left: 15px;
	overflow-y: scroll;
}
.area-item li {
	padding: 14px 0;
	border-bottom: 1px solid #ebebeb;
}
</style>

