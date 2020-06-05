<template>
	<view class="content">
		<view class="l-adress">
			<!-- 收货人 -->
			<view class="l-adress-name l-my-flex-start">
				<view class="l-left">收货人</view>
				<view class="l-right"><input class="l-inp" type="text" v-model="username" /></view>
			</view>
			<!-- 联系方式 -->
			<view class="l-adress-name l-my-flex-start">
				<view class="l-left">联系方式</view>
				<view class="l-right"><input class="l-inp" type="text" v-model="phone" /></view>
			</view>
			<!-- 所在地区 -->
			<view class="l-adress-name l-my-flex-start">
				<view class="l-left">所在地区</view>
				<view class="l-right"><input class="l-inp" type="text" v-model="position" /></view>
			</view>
			<!-- 详细地址 -->
			<view class="l-adress-name l-my-flex-start">
				<view class="l-left">详细地址</view>
				<view class="l-right"><input class="l-inp" type="text" v-model="detail_position" /></view>
			</view>
			
			<view class="l-adress-name l-my-flex-bw">
				<view class="l-left">默认地址</view>
				<view class="l-my-flex-center"><u-switch v-model="checked" active-color="#D6B975" inactive-color="#eee"></u-switch></view>
			</view>
			
		</view>
		
		<!-- 确定 -->
		<view class="l-confirm">
			<view class="l-top">保存</view>
			<view class="l-bottom">删除</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:"张三",
				phone:"18736911636",
				position:"浙江省杭州市滨江区",
				detail_position:"秋溢路6-101云狐科技园",
				checked:true
				
				
			}
		},
		onLoad() {

		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
.l-adress{
	padding: 0 30rpx;
	background: #FFFFFF;
	.l-adress-name{
		height: 86rpx;
		border-bottom: 2rpx solid rgba(238,238,238,1);
		.l-left{
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(51,51,51,1);
			margin-right: 70rpx;
			width: 120rpx;
		}
		.l-right{
			height: 86rpx;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:400;
			.l-inp{
				color:rgba(51,51,51,1);
				height: 86rpx;
				font-size:28rpx;
			}
		}
	}
	
}
.l-confirm{
		padding: 0 30rpx;
		margin-top: 80rpx;
		.l-top{
			width: 100%;
			height: 98rpx;
			text-align: center;
			line-height: 98rpx;
			background:rgba(215,185,117,1);
			border-radius:16rpx;
			font-size:30rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(255,255,255,1);
		}
		.l-bottom{
			width:100%;
			height:98rpx;
			margin-top: 20rpx;
			border:1px solid rgba(177,177,182,1);
			text-align: center;
			line-height: 98rpx;
			font-size:30rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(177,177,182,1);
			border-radius:16rpx;
		}
	}
</style>
