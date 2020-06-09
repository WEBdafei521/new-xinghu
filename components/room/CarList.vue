<template>
	<view class="carList-container">
		<template v-if="vipVisible && visible">
			<view class="carList-vip">
				<image class="carList-vip-img" src="../../static/img/car-head.png" mode="scaleToFill"></image>
			</view>
		</template>
		1231231
	</view>
</template>

<script>
	export default {
		props: {
			visible: {
				type: Number
			}
		},
		data () {
			return {
				vipVisible: true,
			}
		},
		created () {
		},
		methods: {
			
		},
	}
</script>

<style lang="scss" scoped>d


l

ldjadla3
/* 样式 */
.carList-vip {
	position: absolute;
	top: -66rpx;
	padding: 0 20rpx;
	z-index: -1;
	height: 133rpx;
	width: 100%;
	
	.carList-vip-img{
		width: 100%;
		height: 100%;
	}
}

	
</style>
