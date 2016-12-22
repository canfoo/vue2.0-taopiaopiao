<template>
	<section class="play-date">
		<section v-show="dataNum === 0">
			<div class="line">
				<span class="ll le vm"></span>
				<i class="ic md vm"></i>
				<em class="lef">上午场</em>
				<span class="lr le vm"></span>
			</div>
			<ul class="pdate">
				<li>
					<div class="pd pd-l fl">
						<div>
							<em class="fb">10:30</em>
							<span class="fo f1">国语 3D</span>
						</div>
						<div>
							<span class="fo f2">12:14 散场</span>
							<span class="fo f3">三号厅</span>
						</div>
					</div>
					<div class="pd pd-r fr pr">
						<div class="pr-l">
							<em class="fb prf">¥18.8</em>
							<span class="fo f4">¥50</span>
							<span class="label-mod label-orange">新人专享</span>
						</div>
						<button class="buy-btn f12 pa">购买</button>
					</div>
				</li>
			</ul>
			<div class="line">
				<span class="ll le vm"></span>
				<i class="ic nd vm"></i>
				<em class="lef">下午场</em>
				<span class="lr le vm"></span>
			</div>
			<ul class="pdate">
				<li>
					<div class="pd pd-l fl">
						<div>
							<em class="fb">13:30</em>
							<span class="fo f1">国语 3D</span>
						</div>
						<div>
							<span class="fo f2">15:33 散场</span>
							<span class="fo f3">三号厅</span>
						</div>
					</div>
					<div class="pd pd-r fr pr">
						<div class="pr-l">
							<em class="fb prf">¥28.8</em>
							<span class="fo f4">¥50</span>
							<span class="label-mod label-orange">新人专享</span>
						</div>
						<button class="buy-btn f12 pa">购买</button>
					</div>
				</li>
				<li>
					<div class="pd pd-l fl">
						<div>
							<em class="fb">17:30</em>
							<span class="fo f1">国语 3D</span>
						</div>
						<div>
							<span class="fo f2">19:33 散场</span>
							<span class="fo f3">三号厅</span>
						</div>
					</div>
					<div class="pd pd-r fr pr">
						<div class="pr-l">
							<em class="fb prf">¥38.8</em>
							<span class="fo f4">¥50</span>
							<span class="label-mod label-orange">新人专享</span>
						</div>
						<button class="buy-btn f12 pa">购买</button>
					</div>
				</li>
			</ul>
		</section>
		<section v-show="dataNum === 1">
			<div class="line">
				<span class="ll le vm"></span>
				<i class="ic nd vm"></i>
				<em class="lef">下午场</em>
				<span class="lr le vm"></span>
			</div>
			<ul class="pdate">
				<li>
					<div class="pd pd-l fl">
						<div>
							<em class="fb">13:30</em>
							<span class="fo f1">国语 3D</span>
						</div>
						<div>
							<span class="fo f2">15:33 散场</span>
							<span class="fo f3">三号厅</span>
						</div>
					</div>
					<div class="pd pd-r fr pr">
						<div class="pr-l">
							<em class="fb prf">¥28.8</em>
							<span class="fo f4">¥50</span>
							<span class="label-mod label-orange">新人专享</span>
						</div>
						<button class="buy-btn f12 pa">购买</button>
					</div>
				</li>
				<li>
					<div class="pd pd-l fl">
						<div>
							<em class="fb">17:30</em>
							<span class="fo f1">国语 3D</span>
						</div>
						<div>
							<span class="fo f2">19:33 散场</span>
							<span class="fo f3">三号厅</span>
						</div>
					</div>
					<div class="pd pd-r fr pr">
						<div class="pr-l">
							<em class="fb prf">¥38.8</em>
							<span class="fo f4">¥50</span>
							<span class="label-mod label-orange">新人专享</span>
						</div>
						<button class="buy-btn f12 pa">购买</button>
					</div>
				</li>
			</ul>
			<div class="line">
				<span class="ll le vm"></span>
				<i class="ic ad vm"></i>
				<em class="lef">晚上场</em>
				<span class="lr le vm"></span>
			</div>
			<ul class="pdate">
				<li>
					<div class="pd pd-l fl">
						<div>
							<em class="fb">20:30</em>
							<span class="fo f1">国语 3D</span>
						</div>
						<div>
							<span class="fo f2">22:33 散场</span>
							<span class="fo f3">三号厅</span>
						</div>
					</div>
					<div class="pd pd-r fr pr">
						<div class="pr-l">
							<em class="fb prf">¥28.8</em>
							<span class="fo f4">¥50</span>
							<span class="label-mod label-orange">新人专享</span>
						</div>
						<button class="buy-btn f12 pa">购买</button>
					</div>
				</li>
				<li>
					<div class="pd pd-l fl">
						<div>
							<em class="fb">23:30</em>
							<span class="fo f1">国语 3D</span>
						</div>
						<div>
							<span class="fo f2">01:33 散场</span>
							<span class="fo f3">三号厅</span>
						</div>
					</div>
					<div class="pd pd-r fr pr">
						<div class="pr-l">
							<em class="fb prf">¥38.8</em>
							<span class="fo f4">¥50</span>
							<span class="label-mod label-orange">新人专享</span>
						</div>
						<button class="buy-btn f12 pa">购买</button>
					</div>
				</li>
			</ul>
		</section>
		<section v-show="dataNum === 2">
			<div class="line">
				<span class="ll le vm"></span>
				<i class="ic ad vm"></i>
				<em class="lef">晚上场</em>
				<span class="lr le vm"></span>
			</div>
			<ul class="pdate">
				<li>
					<div class="pd pd-l fl">
						<div>
							<em class="fb">20:30</em>
							<span class="fo f1">国语 3D</span>
						</div>
						<div>
							<span class="fo f2">22:33 散场</span>
							<span class="fo f3">三号厅</span>
						</div>
					</div>
					<div class="pd pd-r fr pr">
						<div class="pr-l">
							<em class="fb prf">¥28.8</em>
							<span class="fo f4">¥50</span>
							<span class="label-mod label-orange">新人专享</span>
						</div>
						<button class="buy-btn f12 pa">购买</button>
					</div>
				</li>
				<li>
					<div class="pd pd-l fl">
						<div>
							<em class="fb">23:30</em>
							<span class="fo f1">国语 3D</span>
						</div>
						<div>
							<span class="fo f2">01:33 散场</span>
							<span class="fo f3">三号厅</span>
						</div>
					</div>
					<div class="pd pd-r fr pr">
						<div class="pr-l">
							<em class="fb prf">¥38.8</em>
							<span class="fo f4">¥50</span>
							<span class="label-mod label-orange">新人专享</span>
						</div>
						<button class="buy-btn f12 pa">购买</button>
					</div>
				</li>
			</ul>
		</section>
		<section v-show="dataNum === 3">
			<div class="line">
				<span class="ll le vm"></span>
				<i class="ic md vm"></i>
				<em class="lef">上午场</em>
				<span class="lr le vm"></span>
			</div>
			<ul class="pdate">
				<li>
					<div class="pd pd-l fl">
						<div>
							<em class="fb">10:30</em>
							<span class="fo f1">国语 3D</span>
						</div>
						<div>
							<span class="fo f2">12:14 散场</span>
							<span class="fo f3">三号厅</span>
						</div>
					</div>
					<div class="pd pd-r fr pr">
						<div class="pr-l">
							<em class="fb prf">¥18.8</em>
							<span class="fo f4">¥50</span>
							<span class="label-mod label-orange">新人专享</span>
						</div>
						<button class="buy-btn f12 pa">购买</button>
					</div>
				</li>
			</ul>
		</section>
		<div style="height: 60px;"></div>
	</section>
</template>

<script>
export default{
	props: {
		dataNum: {
			type: Number,
			default: 0
		}
	}
}
</script>

<style>
.play-date {
	background-color: #fff;
	padding-bottom: 10px;
}
.line {
	text-align: center;
	margin-top: 10px;
}
.lef {
	color: #999;
	font-weight: 400;
	font-size: 10px;
	margin-right: 1.5%;
}
.le {
	display: inline-block;
	width: 35%;
	border-bottom: 1px dashed #d7d7d7;
}
.ic {
	display: inline-block;
	width: 16px;
	height: 16px;
	border-radius: 100%;
	background-size: 90%;
	background-position: center center;
	background-repeat: no-repeat;
	margin-left: 1.5%;
}
.md {
	background-image: url('../../assets/images/md.svg');
	background-color: #b8dcf6;
}
.nd {
	background-image: url('../../assets/images/nd.svg');
	background-color: #faccaa;
}
.ad {
	background-image: url('../../assets/images/ad.svg');
	background-color: #cac1f8;
}
.pd, 
.pr-l {
	display: inline-block;
	width: 45%;
}
.pd div:nth-of-type(2) {
	margin-top: 2px;
}
.pdate li {
	height: 65px;
	padding: 15px 10px 10px 15px;
	border-bottom: 1px solid #ebebeb;
}
.pdate li:last-child {
	border-bottom: 0px;
}
.pdate em {
	font-size: 18px;
}
.pdate .buy-btn {
	left: 59%;
	bottom: 21px;
}
.fo {
	font-size: 12px;
	color: #999;
}
.f1 {
	margin-left: 22px;
}
.f3 {
	margin-left: 10px;
}
.f4 {
	display: block;
	text-decoration: line-through;
	margin: 2px 0;
}
.pr-l {
	text-align: right;
}
.prf {
	color: #fd2c32;
}
</style>

