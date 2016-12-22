<template>
	<section id="hot-evaluation">
		<header class="h-e-header">
			<span>热门评价</span>
			<span>(105707条)</span>
		</header>
		<ul>
			<li class="border-1px-bottom evl-item" v-for="item in lists">
				<figure class="he-u-icon fl">
					<img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_100x100.jpg" alt="">
				</figure>
				<section class="he-u-content">
					<div>
						<div class="ib">
							<span class="he-u-name">
								{{ item.nickName }}
							</span>
							<div class="full-star pr">
								<div class="score-start" :style="{width: `${item.remark * 10}%`}"></div>
							</div>
						</div>
						<span class="fr he-u-time">12-05 16:07</span>
					</div>
					<article class="he-u-say">
						{{ item.content }}
					</article>
				</section>
			</li>
		</ul>
		<p class="no-more">没有更多了～</p>
		<div style="height: 60px"></div>
	</section>
</template>
<script>
export default{
	data () {
		return {
		}
	},
	props: {
		lists: {
			type: Array,
			default: () => []
		}
	},
	components: {
	}
}
</script>

<style>
#hot-evaluation {
	background-color: #fff;
	padding-left: 15px;
	box-sizing: border-box;
}
.h-e-header {
	padding: 12px 0;
} 
.h-e-header span:first-child {
	color: #000;
	font-size: 16px;
	font-weight: bold;
}
.h-e-header span:last-child {
	color: #666
}
.evl-item {
	padding-top: 10px;
}
.he-u-icon {
	width: 25px;
	height: 25px;
	border-radius: 100%;
	overflow: hidden;
}
.he-u-icon img {
	width: 100%;
	height: 100%;
}
.he-u-content {
	margin-left: 30px;
	padding-right: 10px;
	box-sizing: border-box;
}
#hot-evaluation .full-star,
.he-u-name {
	display: inline-block;
	vertical-align: middle;
}
#hot-evaluation .full-star {
	margin-top: -1px;
}
.he-u-name {
	max-width: 60px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	font-size: 14px;
	color: #000;
	font-weight: bold;
}
.he-u-time {
	color: #666;
	font-size: 10px;
	margin-top: 4px;
}
.he-u-say {
	font-size: 12px;
	line-height: 20px;
	padding: 5px 0 15px;
}
.no-more {
	text-align: center;
	padding: 15px 0 10px;
	font-size: 14px;
	color: #666;
}
</style>

