<template>
	<section id="movie-detail">
		<header class="mbg pr">
			<figure class="d-cover">
				<img :src="detailObj.poster ? `https://gw.alicdn.com/${detailObj.poster}` : 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png'" alt="">
			</figure>
			<article class="d-info">
				<p class="d-name tddd">{{ detailObj.showName }}</p>
				<p class="tddd">{{ detailObj.showNameEn }}</p>
				<p>{{ detailObj.type }}</p>
				<p>{{ detailObj.country }}｜{{ detailObj.duration }}分钟</p>
				<p>{{ detailObj.openTime }}在中国上映</p>
				<div class="full-star pr">
					<div class="score-start" :style="{width: `${detailObj.remark * 10}%`}"></div>
					<span class="score pa">{{ detailObj.remark }}分</span>
				</div>
			</article>
		</header>
		<section v-if="infoObj">
			<section class="intro-block border-1px-bottom">
				<article class="d-intro">
					<p ref="dint" :class="{'hide-something': hideSomething}">
						{{ infoObj.description }}
					</p>
					<p class="d-control" @click="controlShowMany">
						<span v-if="hideSomething">展开</span>
						<span v-else>收起</span>
					</p>
				</article>
			</section>
			<section class="ab-photo pr border-1px-bottom">
				<header class="ab-header pa">
					<span class="fb">演职人员</span>
				</header>
				<div class="swiper-container">
				    <div class="swiper-wrapper" v-if="infoObj.artistes">
				        <div class="swiper-slide" v-for="item in infoObj.artistes.actor">
				        	<div class="am-img pr">
				        		<img :src="`https://gw.alicdn.com/${item.avatar}`" alt="">
				        		<div class="am-title pa">
				        			<p class="tddd">{{ item.artisteName }}</p>
				        			<p>{{ item.profession }}</p>
				        		</div>
				        	</div>
				        </div>
				    </div>
				</div>
			</section>
			<section class="ab-photo crew-ab-photo pr border-1px-bottom">
				<header class="ab-header pa">
					<span class="fb">剧照</span>
				</header>
				<div class="swiper-container crew-swiper-container">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide" v-for="item in infoObj.trailer">
				        	<div class="am-img crew-img">
				        		<img :src="`https://gw.alicdn.com/${item}`" alt="">
				        	</div>
				        </div>
			        </div>
			    </div>
			</section>
			<hotEvaluation :lists="evalLists"></hotEvaluation>
		</section>
		<section v-else class="no-data">
			<span>暂时没有更多数据～</span>
		</section>
	</section>
</template>

<script>
import Swiper from '../assets/js/swiper.min.js'
import { mapMutations } from 'vuex'
import { hotEvaluation } from '../components/'
export default{
	data () {
		return {
			hideSomething: true,
			detailObj: {},
			infoObj: false,
			evalLists: []
		}
	},
	components: {
		hotEvaluation
	},
	methods: {
		...mapMutations([
		  'pushLoadStack',
		  'completeLoad'
		]),
		controlShowMany () {
			this.hideSomething = !this.hideSomething
		},
		requestData (url, fn) {
	      this.pushLoadStack()
	      this.$http.get(url).then(fn).then(this.completeLoad)
    },
    getDataById (lists, id) {
    	for (let i = 0; i < lists.length; i++) {
    		if (lists[i].mID === id) {
    			return lists[i]
    		}
    	}
    	return false
    },
    initSwiper () {
    	this.$nextTick(() => {
    		var swiper = new Swiper('.swiper-container', {
  		    pagination: '.swiper-pagination',
  		    slidesPerView: 'auto',
  		    centeredSlides: false,
  		    spaceBetween: 5
    		})
    	})
    }
	},
	created () {
		let id = this.$route.params.id
		let hotLists = this.$store.state.city.data
		let comingLists = this.$store.state.coming.lists
		//由于后台没有配置更多的请求接口，
		//电影详情页的数据是从全局（vuex）拿过来的
		if (comingLists.length) {
			this.detailObj = this.getDataById(comingLists, id)
		} else if (!comingLists.length && !hotLists.length) {
			this.$router.push('/')
		} else {
			this.detailObj = this.getDataById(hotLists, id)
		}

		let detailStr = this.detailObj.detailStr
		if (detailStr) {
			this.requestData(`/movie/info/?name=${detailStr}`, (response) => {
				let data = response.data 
				this.infoObj = data.data.data.returnValue
				this.initSwiper()
			})
			this.requestData(`/movie/evaluation/?name=${detailStr}`, (response) => {
				let data = response.data
				this.evalLists = data.data.data.returnValue
			})
		} else {
			this.infoObj = false
		}
		this.initSwiper()
	}
}
</script>

<style>
.border-1px-bottom {
	border-bottom: 1px solid #d9d9d9;
}
.mbg {
	height: 10rem;
	height: 50vmin;
	background: url('../assets/images/mbg.png') no-repeat;
	background-size: 100% auto;
	padding-left: 15px;
	overflow: hidden;
	box-sizing: border-box;
}
.d-cover {
	position: absolute;
	bottom: 0;
	z-index: 1;
	background: #ccc;
	width: 33.10vmin;
	min-width: 6.25rem;
	min-width: 31.3vmin;
	height: 46.3vmin;
}
.d-cover img {
	width: 100%;
	height: 100%;
}
.d-info {
	display: inline-block;
	margin: 3.8vmin 0 0 37.5vmin;
	color: #fff;
	width: 55%;
}
.d-info p {
	opacity: .8;
	font-size: .75rem;
	line-height: .875rem;
	line-height: 4.4vmin;
	margin-bottom: .375rem;
	margin-bottom: 1.9vmin;
	width: auto;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.d-info p.d-name {
	position: relative;
	font-size: 1.125rem;
	line-height: 1.5rem;
	line-height: 7.5vmin;
	max-height: 3rem;
	max-height: 15vmin;
	overflow-y: hidden;
	margin-bottom: .375rem;
	margin-bottom: 1.9vmin;
	color: #fff;
	opacity: 1;
}
.mbg .full-star {
	margin-top: 6vmin;
}
.mbg .score {
	right: -32px;
	top: 1px;
	color: #fff;
	font-size: 12px;
}
.mbg .full-star {
	width: 70px;
	height: 14px;
}
.intro-block {
}
.d-intro {
	padding: 20px 15px;
	box-sizing: border-box;
	background-color: #fff;
}
.d-intro p {
	word-break: break-word;
	margin-bottom: .75rem;
	margin-bottom: 3.8vmin;
	font-size: .9375rem;
	line-height: 1.5rem;
	line-height: 7.5vmin;
	color: #333;
	overflow: hidden;
}
.d-intro p.d-control {
	text-align: center;
	font-size: 1.1rem;
}
.ab-photo {
	padding: 15px 15px 25px;
	box-sizing: border-box;
	background-color: #fff;
}
.crew-ab-photo {
	padding: 15px 15px 0px;
}
.ab-header {
	z-index: 1000;
}
.ab-header span {
	font-size: .9375rem;
	line-height: 2rem;
	line-height: 10vmin;
	color: #000;
}
.hide-something {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.am-img {
	height: 124px;
}
.crew-img {
	height: 100px;
}
.am-img img{
	height: 100%;
	width: auto;
}
.am-title {
	width: 100%;
}
.am-title p {
	text-align: center;
}
.am-title p:first-child {
	color: #333;
	font-size: 13px;
}
.am-title p:last-child {
	color: #999;
	font-size: 11px;
}
#movie-detail .swiper-container {
	height: 202px;
  width: 100%;
  overflow: initial;
  overflow-x: hidden;
}
#movie-detail .crew-swiper-container {
	margin-top: 7px;
	height: 165px;
}
#movie-detail .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
#movie-detail .swiper-slide:nth-child(2n),
#movie-detail .swiper-slide:nth-child(3n) {
    width: auto;
}
.no-data {
	padding: 60px;
	font-size: 16px;
	color: #666;
	text-align: center;
}
</style>

