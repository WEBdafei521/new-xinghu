<template>
	<view class="l-container-user">
		<view class="l-top-title">
			<!-- back -->
			<view class="l-top-back"><image class="images" src="https://img1.starfox.cn:9001/livefs/default/20200606/14/13/0/user_back.png" mode=""></image></view>
			<view class="l-zanwei"></view>
			<!-- userInfo -->
			<view class="l-user-info l-my-flex-start">
				<view class="l-left l-my-flex-start">
					<view class="l-left-user-img"><image class="images" src="../../static/mlogo.png" mode=""></image></view>
					<view class="l-right-user-info">
						<view class="l-user-name l-my-flex-bw">
							<text>明星狐集团</text> 
							<view class="l-type-login">
								微信号登陆
							</view>
						</view>
						<view class="l-user-detail">
							<text>ID: 00002</text>
						</view>
						<view class="l-user-detail">
							<text>188****8866</text>
						</view>
						<view class="l-user-detail">
							<text>注册时间：2020-03-17  11:22</text>
						</view>
					</view>
				</view>
				<view class="l-right">
					<view class="active"></view>
					<image class="images" src="../../static/natice.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 我的订单 -->
		<view class="l-user-order">
			<view class="l-user-item">
				<view class="l-order-top l-my-flex-bw">
					<view class="l-my">我的订单</view>
					<view class="l-look-all" @tap="all_order_list">查看全部订单></view>
				</view>
				<view class="l-order-bottom">
					<view class="l-bottom-item">
						<image class="images1" src="../../static/unpay.png" mode=""></image>
						<view class="l-bottom-text">待付款</view>
					</view>
					<view class="l-bottom-item">
						<image class="images2" src="../../static/unsend.png" mode=""></image>
						<view class="l-bottom-text">待发货</view>
					</view>
					<view class="l-bottom-item">
						<image class="images3" src="../../static/notget.png" mode=""></image>
						<view class="l-bottom-text">待收货</view>
					</view>
					<view class="l-bottom-item">
						<image class="images4" src="../../static/argue.png" mode=""></image>
						<view class="l-bottom-text">评论</view>
					</view>
					<view class="l-bottom-item">
						<image class="images5" src="../../static/success_pay.png" mode=""></image>
						<view class="l-bottom-text">退款/售后</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 邀请海报 -->
		<view class="l-visied">
			<view class="l-item"> </view>
		</view>
		<!-- 商城/直播 -->
		<view class="l-shopping-live l-my-flex-bw">
			<view class="l-live">
				<view class="l-back"><image class="images" src="../../static/l-live.png" mode=""></image></view>
				<view class="l-live-back">
					<image class="l-icon" src="../../static/l-live-icon.png" mode=""></image>
					<text>直播/预告</text>
				</view>
			</view>
			<view class="l-shopping">
				<view class="l-back"><image class="images" src="../../static/l-shopping.png" mode=""></image></view>
				<view class="l-live-back">
					<image class="l-icon" src="../../static/l-shopping-icon.png" mode=""></image>
					<text>管理商城</text>
				</view>
			</view>
		</view>
		<!-- 其他工具 -->
		<view class="l-other-tool">
			<view class="l-tool-title">
				<view class="l-tool-text l-my-flex-bw">
					<text>其他工具</text>
				</view>
			</view>
			<view class="l-tool-list">
				<!-- <view class="l-tool-item">
					<image class="images" src="../../static/l-coupon.png" mode=""></image>
					<text class="l-tool-name">优惠券</text>
				</view>
				<view class="l-tool-item">
					<image class="images" src="../../static/l-car.png" mode=""></image>
					<text class="l-tool-name">购物车</text>
				</view> -->
				<view class="l-tool-item" @tap="goAdress">
					<image class="images" src="../../static/l-location.png" mode=""></image>
					<text class="l-tool-name">收货地址</text>
				</view>
				<view class="l-tool-item">
					<image class="images" src="../../static/l-identification.png" mode=""></image>
					<text class="l-tool-name">实名认证</text>
				</view>
				<!-- <view class="l-tool-item">
					<image class="images" src="../../static/l-spread.png" mode=""></image>
					<text class="l-tool-name">我的推广</text>
				</view> -->
				<view class="l-tool-item" @tap="goVisited">
					<image class="images" src="../../static/l-invitation.png" mode=""></image>
					<text class="l-tool-name">更绑邀请</text>
				</view>
				<view class="l-tool-item" @tap="goHomePage">
					<image class="images" src="../../static/l-user-index.png" mode=""></image>
					<text class="l-tool-name">个人主页</text>
				</view>
				<view class="l-tool-item">
					<image class="images" src="../../static/l-settion.png" mode=""></image>
					<text class="l-tool-name">设置中心</text>
				</view>
			</view>
			
		</view>
		<!-- 平台服务 -->
		<view class="l-other-tool l-other-server">
			<view class="l-tool-title">
				<view class="l-tool-text l-my-flex-bw">
					<text>平台服务</text>
				</view>
			</view>
			<view class="l-tool-list">
				<!-- <view class="l-tool-item">
					<image class="images" src="../../static/l-my-integral.png" mode=""></image>
					<text class="l-tool-name">我的积分</text>
				</view>
				<view class="l-tool-item">
					<image class="images" src="../../static/l-integral.png" mode=""></image>
					<text class="l-tool-name">积分商城</text>
				</view>
				<view class="l-tool-item">
					<image class="images" src="../../static/l-costomer.png" mode=""></image>
					<text class="l-tool-name">联系客服</text>
				</view> -->
				<view class="l-tool-item">
					<image class="images" src="../../static/l-VIP.png" mode=""></image>
					<text class="l-tool-name">开通服务</text>
				</view>
			</view>
			
		</view>
		<!-- 版权 -->
		<view class="l-copy-right">
			<view class="l-item"><image class="images" src="../../static/l-copy-right.png" mode=""></image></view>
			<view class="l-item-text">星狐集团提供技术支持</view>
			<view class="l-item-url">www.starfox.cn</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		onLoad (option) {
			
		},
		methods: {
			goVisited(){
				uni.navigateTo({
				    url: 'replaceVisita/index'
				});
			},
			all_order_list(){
				uni.navigateTo({
				    url: 'order/index'
				});
			},
			goAdress(){
				console.log("-----")
				uni.navigateTo({
				    url: 'address/index'
				});
			},
			goHomePage(){
				console.log("-----")
				uni.navigateTo({
				    url: 'homePage/index'
				});
			},
	
		}
	}
</script>

<style lang="scss" scoped>
.l-top-title{
	width: 100vw;
	position: relative;
	.l-top-back{
		position: absolute;
		width: 100vw;
		.images{
			width: 100vw;
			z-index: -1;
		}
	}
	.l-zanwei{
		width: 100vw;
		height: 196rpx;
	}
}
.l-user-info{
	position: relative;
	z-index: 1;
	padding: 0 41rpx;
	.l-left{
		.l-left-user-img{
			width: 117rpx;
			height: 117rpx;
			border-radius: 117rpx;
			overflow: hidden;
			margin-right:32rpx ;
			.images{
				width: 117rpx;
				height: 117rpx;
			}
		}
		.l-user-name{
			font-size:44rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(51,51,51,1);
			.l-type-login{
				width:144rpx;
				text-align: center;
				margin-left: 30rpx;
				height:41rpx;
				border:1px solid rgba(164,132,83,1);
				border-radius:21rpx;
				font-size:22rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(164,132,83,1);
			}
		}
		.l-user-detail{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(102,102,102,1);
		}
	}
	.l-right{
		position:absolute;
		right: 41rpx;
		top: 10rpx;
		height: 100%;
		.images{
			width: 33rpx;
			height: 41rpx;
		}
		.active{
			position: absolute;
			right: 0;
			top: 0;
			border: 3rpx solid #E93340;
			background: rgba(233,51,64,1);
			width: 12rpx;
			height: 12rpx;
			border-radius: 50%;
			z-index: 1;
		}
	}
}
.l-user-order{
	position: relative;
	z-index: 1;
	margin-top: 60rpx;
	padding: 20rpx 30rpx;
	.l-user-item{
		width: 100%;
		height:220rpx;
		padding: 20rpx 19rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 5rpx 5rpx 0px rgba(208,208,208,1);
		border-radius:16rpx;
		.l-order-top{
			.l-my{
				font-size:30rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(51,51,51,1);
			}
			.l-look-all{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(102,102,102,1);
			}
		}
		.l-order-bottom{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			margin-top: 42rpx;
			.l-bottom-item{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.l-bottom-text{
					padding-top: 16rpx;
					font-size:26rpx;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(51,51,51,1);
				}
				.images1{
					width: 49rpx;
					height: 45rpx;
				}
				.images2{
					width: 51rpx;
					height: 45rpx;
				}
				.images3{
					width: 55rpx;
					height: 45rpx;
				}
				.images4{
					width: 47rpx;
					height: 45rpx;
				}
				.images5{
					width: 57rpx;
					height: 45rpx;
				}
			}
		}
	}
}
.l-visied{
	padding:0 30rpx;
	margin-bottom: 20rpx;
	.l-item{
		width: 100%;
		height:210rpx;
		border-radius:16rpx;
		background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
	}
}
.l-shopping-live{
	padding: 0 30rpx;
	margin-bottom: 20rpx;
	width: 100%;
	.l-live{
		width: 45vw;
		height:210rpx;
		box-shadow:0px 5rpx 5rpx 0px rgba(208,208,208,1);
		border-radius:16rpx;
		position: relative;
		.l-back{
			position: absolute;
			z-index: -1;
			overflow: hidden;
			.images{
				width: 45vw;
				height: 210rpx;
				
			}
		}
		.l-live-back{
			display: flex;
			height: 210rpx;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(255,255,255,1);
			.l-icon{
				width: 49rpx;
				height: 51rpx;
				margin-bottom: 14rpx;
			}
		}
	}
	.l-shopping{
		width: 49%;
		height:210rpx;
		box-shadow:0px 5rpx 5rpx 0px rgba(208,208,208,1);
		border-radius:16rpx;
		position: relative;
		.l-back{
			position: absolute;
			z-index: -1;
			overflow: hidden;
			.images{
				width: 45vw;
				height: 210rpx;
				
			}
		}
		.l-live-back{
			display: flex;
			height: 210rpx;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(255,255,255,1);
			.l-icon{
				width: 49rpx;
				height: 51rpx;
				margin-bottom: 14rpx;
			}
		}
	}
}
.l-other-tool{
	margin: 0 30rpx 20rpx 30rpx;
	height:379rpx;
	background:rgba(255,255,255,1);
	box-shadow:0px 5rpx 5rpx 0px rgba(208,208,208,1);
	border-radius:10rpx;
	.l-tool-title{
		padding: 20rpx 19rpx;
		
		.l-tool-text{
			font-size:30rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(51,51,51,1);
		}
	}
	.l-tool-list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		.l-tool-item{
			width: 25%;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			flex-direction: column;
			margin-bottom: 30rpx;
			.images{
				width: 64rpx;
				height: 64rpx;
				margin-bottom: 20rpx;
			}
		}
	}
	
}
.l-other-server{
	height: 239rpx;
}
.l-copy-right{
	width: 100vw;
	margin-bottom: 36rpx;
	.l-item{
		width: 100vw;
		text-align: center;
			margin: 0 auto;
		.images{
			width: 42rpx;
			height: 51rpx;
		}
	}
	.l-item-text{
		width: 100vw;
		text-align: center;
		font-size:22rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(210,210,210,1);
	}
	.l-item-url{
		width: 100vw;
		text-align: center;
		font-size:20rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(210,210,210,1);
	}
}
</style>
