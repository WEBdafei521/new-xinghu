<template>
	<view class="live-container" :style="{'height': `${windowHeight}px`}">
		<scroll-view
			class="scroll-view_H"
			scroll-y="true"
			@scroll="scroll"
		>
			<transiton name="fade">
				<view :class="['live-nav', {'on': navType }]">
					<uni-nav-bar
						left-icon="back"
						fixed
						status-bar
					>
						<template v-if="navType">
							<view slot="left" class="live-nav-back">
								<u-icon name="arrow-left" color="#fff" size="30"></u-icon>
							</view>
						</template>
						<template v-if="!navType">
							<view class="live-nav-title">
								红狐集团
							</view>
						</template>
					</uni-nav-bar>
					<template v-if="navType">
						<image class="nav-bg" src="https://img1.starfox.cn:9001/livefs/zhuiMeng/20200527/14/56/0/room-bg.jpg" mode=""></image>
					</template>
				</view>
			</transiton>
			<view class="live-content">
				<view class="live-user-box">
					<view class="live-userInfo">
						<view class="userInfo-avtar">
							<image class="avtar-img" src="https://img1.starfox.cn:9001/livefs/zhuiMeng/20200527/14/56/0/room-bg.jpg" mode=""></image>
							<template v-if="btnType">
								<image class="avtar-gender" src="../../../static/live/icon-boy.png" mode=""></image>
							</template>
							<template v-else>
								<image class="avtar-gender" src="../../../static/live/icon-gril.png" mode=""></image>
							</template>
							<text class="userInfo-name">红狐集团</text>
						</view>
						<view class="userInfo-btn">
							<template v-if="btnType">
								<button class="btn-button addInfo-btn" type="default">编辑资料</button>
							</template>
							<template v-else>
								<view class="user_two_btn">
									<template v-if="current == 0">
										<button class="btn-button out-btn out-btn-on" type="default">+关注</button>
									</template>
									<template v-else>
										<button class="btn-button out-btn" type="default">已关注</button>
									</template>
									<button class="btn-button out-btn share-btn" type="default">
										<image class="share-btn-img" src="../../../static/live/icon-share.png" mode=""></image>
										分享
									</button>
								</view>
								
							</template>
						</view>
					</view>
					<view class="live-number">
						<view class="number-text">
							<text>ID:00005</text>
							<view class="number-vip">
								<!-- <template v-if="btnType">
									<image class="vip-icon" src="../../../static/live/live-huang.png" mode=""></image>
								</template>
								<template v-else>
									<image class="vip-icon" src="../../../static/live/live-huang-1.png" mode=""></image>
								</template> -->
								<template v-if="btnType">
									<image class="vip-icon" src="../../../static/live/live-vip.png" mode=""></image>
								</template>
								<template v-else>
									<image class="vip-icon" src="../../../static/live/live-vip-1.png" mode=""></image>
								</template>
								<template v-if="btnType">
									<image class="vip-icon live-group" src="../../../static/live/live-group.png" mode=""></image>
								</template>
								<template v-else>
									<image class="vip-icon live-group" src="../../../static/live/live-group-1.png" mode=""></image>
								</template>
							</view>
						</view>
						<view class="number-msg" @click="showPublic()">
							<text>消息推送></text>
							<image class="number-msg-img" src="../../../static/live/icon-wen.png" mode=""></image>
						</view>
					</view>
					<view class="live-goods">
						<u-cell-group>
							<u-cell-item
								icon-size="30"
								bg-color="#fff"
							>
								<view class="live-goods-text" slot="title">
									<image class="live-goods-img" solt="icon" src="../../../static/live/icon-goods.png" mode=""></image>
									<text>我的商城</text>
								</view>
							</u-cell-item>
						</u-cell-group>
					</view>
					<view class="live-textInfo">
						<view class="textInfo-text">
							<text>请填写个人简介，点击添加…</text>
						</view>
						<view class="textInfo-text">
							<text class="text_grub">666关注</text>
							<text>666粉丝</text>
						</view>
					</view>
				</view>
				<view class="recommend-list">
					<view class="list-tabs">
						<u-tabs
							:list="navList"
							:is-scroll="false"
							:current="current"
							@change="navChange"
							bar-width="115"
							bar-height="4"
							active-color="#D7B975"
							height="78"
							font-size="30"
							:bold="false"
						></u-tabs>
					</view>
					<view class="list-content">
						<template v-if="current == 0">
							<live-push />
						</template>
						<template v-else>
							<live-back />
						</template>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 弹窗 -->
		<u-popup
			v-model="publicVisible"
			length="560"
			mode="center"
		>
			<view class="public-popup">
				<view class="public-popup-head">
					<text>关注公众号</text>
				</view>
				<view class="public-popup-content">
					<image class="public-img" src="../../../static/live/pop-bg.png" mode=""></image>
				</view>
				<view class="public-popup-text">
					<text class="popup-text">
						已为您复制公众号名称，请前往微信搜索
						<text class="text-bold">
							【明星狐直播】
						</text>
					</text>
				</view>
				<view class="public-popup-close">
					<button class="close-btn" type="default" @click="publicVisible = false">好的</button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import LivePush from '@/components/liveHome/LivePush.vue'
	import LiveBack from '@/components/liveHome/LiveBack.vue'
	export default {
		components: {
			uniNavBar,
			'live-push': LivePush,
			'live-back': LiveBack,
		},
		data () {
			return {
				navType: 1,
				windowHeight: 200,
				headAttr: {
					top: 0,
					height: 0
				},
				current: 1,
				navList: [
					{
						name: '主播推荐'
					},
					{
						name: '直播回放'
					},
				],
				// 公众号弹窗
				publicVisible: false,
				// btn- 测试 性别  button切换
				btnType: 0,

			}
		},
		onLoad() {
			// 将页面全屏 
			uni.getSystemInfo({
			    success: (res) => {
			        this.windowHeight = res.windowHeight
				}
			})
		},
		methods: {
			// 滚动
			scroll (val) {
				const query = uni.createSelectorQuery().in(this);
				query.select('.live-content').boundingClientRect(data => {
				  this.navType = data.top - 40 > 0 ? 1 : 0
				}).exec();
			},
			// tab切换
			navChange (val) {
				this.current = val
			},
			// 关注公众号弹窗
			showPublic () {
				let copyText = '明星狐直播'
				this.publicVisible = true
				uni.setClipboardData({
					data: copyText,
					success: function(res) {
						uni.getClipboardData({
							success: function(res) {
								// uni.showToast({
								// 	title: '已复制'
								// })
							}
						});
					}
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '~@/common/scss/mixins.scss';
	.avtar-img {
		@include setBox(140rpx, 140rpx);
		border-radius: 50%;
	}
	.avtar-gender {
		@include setBox(36rpx, 35rpx);
	}
	.number-msg-img {
		@include setBox(25rpx, 25rpx);
	}
	.vip-icon {
		width: 33rpx;
		height: 25rpx;
		&.live-group {
			width: 22rpx;
		}
	}
	.btn-button {
		@include resetBtn();
		padding: 0;
		height: 50rpx;
		color: #fff;
		font-size: 26rpx;
		border-radius: 25rpx;
		background: #B1B1B6;
		&.addInfo-btn {
			width: 200rpx;
		}
		&.out-btn {
			width: 144rpx;
			&.out-btn-on {
				background: #E93340;
			}
		}
		&.share-btn {
			color: #D6B975;
			border: 1rpx solid #D6B975;
			background: #fff;
			margin-left: 30rpx;
			.share-btn-img {
				@include setBox(26rpx, 25rpx);
				margin-right: 10rpx;
			}
		}
	}
	.scroll-view_H {
		width: 100%;
		height: 100%;
	}
	.live-container {
		::v-deep .live-nav {
			position: relative;
			height: 320rpx;
			.nav-bg {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				bottom: 0;
				z-index: 3;
			}
			.live-nav-back {
				position: absolute;
				left: 28rpx;
				bottom: 30rpx;
				z-index: 5;
			}
			.live-nav-title {
				position: absolute;
				width: 300rpx;
				left: 50%;
				margin-left: -150rpx;
				text-align: center;
			}
			&.on {
				.uni-navbar__content {
					background-color: transparent !important;
					border: 0;
				}
				.uni-navbar__header {
					background-color: transparent !important;
				}
				.uni-icons  {
					color: #fff !important;
				}
			}
		}
		.live-content {
			position: relative;
			background: #f8f8f8;
			.live-user-box {
				margin-bottom: 20rpx;
				.live-userInfo,
				.live-number,
				.live-textInfo {
					padding: 0 50rpx;
					background: #fff;
				}
				.live-userInfo {
					position: relative;
					background: #fff;
					z-index: 9;
					@include flexBox(flex-start, flex-start);
					.userInfo-avtar {
						position: relative;
						height: 160rpx;
						@include flexBox(space-between);
						flex-direction: column;
					}
					.userInfo-btn {
						padding-left: 50rpx;
						padding-top: 20rpx;
					}
					.user_two_btn {
						@include flexBox(flex-start);
					}
					.userInfo-name {
						font-size: 40rpx;
						font-weight:bold;
					}
					.avtar-gender {
						position: absolute;
						right: 20rpx;
						top: 70rpx;
						z-index: 3;
					}
					.avtar-img {
						margin-top: -40rpx;
					}
				}
				.live-number {
					padding: 16rpx 50rpx;
					width: 100%;
					@include flexBox(space-between);
					.number-text {
						@include flexBox(flex-start);
						font-size: 26rpx;
						.number-vip {
							margin-left: 56rpx;
							.vip-icon {
								margin-right: 10rpx;
							}
						}
					}
					.number-msg {
						@include flexBox(flex-start);
						color: #b1b1b1;
						&-img {
							margin-left: 10rpx;
						}
					}
				}
				::v-deep .live-goods {
					.u-cell {
						padding: 10rpx 50rpx;
						color: #D7B975;
						.u-cell__left-icon-wrap,
						.u-cell__right-icon-wrap {
							color: #D7B975;
						}
					}
					&-text {
						@include flexBox(flex-start);
					}
					&-img {
						width: 27rpx;
						height: 25rpx;
						margin-right: 10rpx;
					}
				}
				.live-textInfo {
					padding-bottom: 40rpx;
					.textInfo-text {
						padding: 20rpx 0 0;
						.text_grub {
							margin-right: 30rpx;
						}
					}
				}
			}
			.recommend-list {
				background: #fff;
				.list-tabs {
					@include border_bottom();
				}
				.list-content {
					width: 100%;
					padding: 20rpx 30rpx;
				}
			}
		}
		::v-deep .u-mode-center-box {
			border-radius: 16rpx;
		}
	}
	.public-popup {
		border-radius: 16rpx;
		&-head {
			padding: 38rpx 0;
			font-size: 30rpx;
			font-weight: bold;
			@include flexBox();
		}
		&-content {
			@include flexBox();
			.public-img {
				@include setBox(480rpx, 365rpx);
			}
		}
		&-text {
			@include flexBox();
			padding: 24rpx 80rpx 41rpx;
			.popup-text {
				text-align: center;
				@include flexBox();
			}
			.text-bold {
				font-weight: bold;
			}
		}
		&-close {
			@include flexBox();
			padding-bottom: 30rpx;
			.close-btn {
				@include resetBtn();
				width: 230rpx;
				height: 60rpx;
				background: #D7B975;
				border-radius: 8rpx;
				color: #fff;
				font-size: 30rpx;
			}
		}
	}
</style>
