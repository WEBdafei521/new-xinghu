<template>
    <view class="l-my-order">
			<view class="l-my-order-list" v-if="listData.length>0">
				<view class="l-my-order-item" v-for="(item,index) of listData" :key="index">
					<!--　状态 -->
					<view class="l-my-order-title l-my-flex-bw">
						<view class="l-left l-my-flex-start">
							<image class="images" src="../../static/icon/foot-zan.png" mode=""></image>
							<text class="l-text">红狐集团旗舰店</text>
							<u-icon name="arrow-right" color="#333333" size="28"></u-icon>
						</view>
						<view class="l-order-item-status">待评价</view>
					</view>
					<!-- 商品内容 -->
					<view class="l-product" @tap="go_details">
						<view class="l-product-image">
							<image class="images" src="../../static/icon/foot-zan.png" mode=""></image>
						</view>
						
						<view class="l-product-info">
							<view class="l-product-intro">
								<view class="l-intro">日系印花连帽工装棉服男ins潮流棉衣外套</view>       
								<view class="l-price">
								  <view class="l-top">￥9.9</view>
									<view class="l-bottom"><u-icon name="close" color="#333333" size="20"></u-icon> 1</view>
								</view>       
							</view>
							<view class="l-rule">
								灰色JM4401；XL【加棉款】
							</view>
						</view>
						
					</view>
					<!-- 商品总计 -->
					<view class="l-product-sum">
						<text class="l-sum">共1件商品 合计：￥</text>
						<text class="l-price">9.9</text>
						<text class="l-active">(免运费)</text>
					</view>
					<!-- 结算 -->
					<view class="l-settlement">
						<view class="l-left">更多</view>
						<view class="l-right">
							<view class="l-wuliu">查看物流</view>
							<view class="l-souhou">申请售后</view>
							<view class="l-yellow">立即评价</view>
						</view>
					</view>
				</view>
				
			</view>
			<view  class="l-my-order-list1" v-if="listData.length==0">
				<view class="l-no">
					<image class="images" src="../../static/icon/no_order_list.png" mode=""></image>
					<view class="l-text"> —— 暂无更多内容 —— </view>
				</view>
				
			</view>
    </view>
</template>

<script>

	export default {
		props: {
			listData: {
				type: Array,
				default: ()=>[]
			}
		},
		data () {
			return {
			
			}
		},
		onLoad() {
		  
		},
		created () {},
			
		methods: {
			go_details(){
				console.log("......")
				uni.navigateTo({
					url:"../orderdetail/index"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.l-my-order{
	padding: 30rpx;
	.l-my-order-list1{
		display: flex;
		margin-top: 300rpx;
		justify-content: center;
		align-items: center;
		.l-no{
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 371rpx;
			height: 370rpx;
			.images{
				width: 371rpx;
				height: 349rpx;
			}
			.l-text{
				width:100%;
				text-align: center;
				margin-top: 30rpx;
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:sample;
				position: relative;
				padding: 0 13rpx;
				color:rgba(153,153,153,1);
				
			}
		}
	}
	.l-my-order-list{
		.l-my-order-item{
			background:rgba(255,255,255,1);
			background: #ffffff;
			border-radius:16rpx;
			margin-bottom: 20rpx;
			padding: 20rpx;
			.l-my-order-title{
				.l-left{
					.images{
						width:43rpx;
						height:43rpx;
						margin-right: 16rpx;
						border-radius:50%;
					}
					.l-text{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:bold;
						color:rgba(40,40,40,1);
						margin-right: 10rpx;
					}
				}
			}
			.l-order-item-status{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:sample;
				color:rgba(215,186,118,1);
			}
			.l-product{
				display: flex;
				flex-direction: row;
				
				margin-top: 30rpx;
				.l-product-image{
					.images{
						width: 227rpx;
						height: 227rpx;
						border-radius:16rpx;
					}
				}
				.l-product-info{
					font-size:24rpx;
					font-family:PingFang SC;
					font-weight:sample;
					color:rgba(153,153,153,1);
					margin-left: 20rpx;
					.l-product-intro{
						display: flex;
						flex-direction: row;
						flex-flow: nowrap;
						
						.l-intro{
							font-size:26rpx;
							font-family:PingFang SC;
							font-weight:sample;
							color:rgba(51,51,51,1);
						}
						.l-price{
							.l-top{
								font-size:26rpx;
								font-family:PingFang SC;
								font-weight:sample;
								color:rgba(51,51,51,1);
							}
							.l-bottom{
								width: 100%;
								text-align: right;
								font-size:24rpx;
								font-family:PingFang SC;
								font-weight:sample;
								color:rgba(153,153,153,1);
								display: flex;
								justify-content: flex-end;
								align-items: center;
							}
						}
					}
					.l-rule{
						font-size:24rpx;
						font-family:PingFang SC;
						font-weight:sample;
						color:rgba(153,153,153,1);
					}
				}
			}
			.l-product-sum{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				border-bottom: 1px solid rgba(238,238,238,1);
				padding-bottom: 10rpx;
				margin-bottom: 10rpx;
				.l-sum,.l-active{
					font-size:24rpx;
					font-family:PingFang SC;
					font-weight:sample;
					color:rgba(51,51,51,1);
				}
				.l-price{
					font-size: 28rpx;
					font-family:PingFang SC;
					font-weight:sample;
					color:rgba(51,51,51,1);
				}
			}
			.l-settlement{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.l-left{
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:sample;
					color:rgba(177,177,182,1);
				}
				.l-right{
					display: flex;
					justify-content: space-between;
					text-align: center;
					
					.l-yellow,.l-souhou,.l-wuliu{
						width: 150rpx;
						margin-left: 10rpx;
						height:50rpx;
						line-height: 48rpx;
						border:1px solid rgba(177,177,182,1);
						border-radius:25rpx;
						font-size:28rpx;
						font-family:PingFang SC;
						// font-weight:sample;
						color:rgba(177,177,182,1);
					}
					.l-yellow{
						background:rgba(215,185,117,1);
						color: #ffffff;
						border-radius:25rpx;
					}
				}
			}
		}
	}
}
</style>
