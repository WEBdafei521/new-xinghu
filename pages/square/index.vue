<template>
	<view class="content">
		
		<view class="l-title-top">
			<lp-input :placeholder="placeholder" @search_inp="top_search"></lp-input>
			<!--  -->
			<view class="l-tabs-title">
				<u-tabs :list="list" active-color="#D7B975" inactive-color="#333333" font-size="30" :is-scroll="false" :current="current" @change="change"></u-tabs>
			</view>
		</view>
		<view class="l-zanwei"></view>
		<!-- 全部列表 -->
		<view class="l-main-list">
			<view class="l-all-list">
				<view class="l-all-item">
					<!-- 回放 -->
					<view class="l-top">
						<!-- back img -->
						<image class="images" src="../../static/room-bg.jpg" mode=""></image>
						<view class="l-top-history">
							<view class="l-sum">
								<view class="l-btn">回放</view>
								<view class="l-people">1.5W人观看</view>
							</view>
						</view>
						<!-- 官方名称 -->
						<view class="l-bottom-nickname">
							<view class="l-name">
								<view class="l-bottom-image"><image class="images" src="../../static/l-settion.png" mode=""></image></view>
								<view class="l-bottom-name">
									海之韵官方
								</view>								
							</view>
						</view>
					</view>
					<view class="l-bottom-tittle">
						<view class="l-name">
							海之韵新品上新直播秀
						</view>
					</view>
				</view>
				
				<view class="l-all-item">
					<!-- 回放 -->
					<view class="l-top">
						<!-- back img -->
						<image class="images" src="../../static/room-bg.jpg" mode=""></image>
						<view class="l-top-history">
							<view class="l-sum">
								<view class="l-btn">回放</view>
								<view class="l-people">1.5W人观看</view>
							</view>
						</view>
						<!-- 官方名称 -->
						<view class="l-bottom-nickname">
							<view class="l-name">
								<view class="l-bottom-image"><image class="images" src="../../static/l-settion.png" mode=""></image></view>
								<view class="l-bottom-name">
									海之韵官方
								</view>								
							</view>
						</view>
					</view>
					<view class="l-bottom-tittle">
						<view class="l-name">
							海之韵新品上新直播秀
						</view>
					</view>
				</view>
				
				<view class="l-all-item">
					<!-- 回放 -->
					<view class="l-top">
						<!-- back img -->
						<image class="images" src="../../static/room-bg.jpg" mode=""></image>
						<view class="l-top-history">
							<view class="l-sum">
								<view class="l-btn">回放</view>
								<view class="l-people">1.5W人观看</view>
							</view>
						</view>
						<!-- 官方名称 -->
						<view class="l-bottom-nickname">
							<view class="l-name">
								<view class="l-bottom-image"><image class="images" src="../../static/l-settion.png" mode=""></image></view>
								<view class="l-bottom-name">
									海之韵官方
								</view>								
							</view>
						</view>
					</view>
					<view class="l-bottom-tittle">
						<view class="l-name">
							海之韵新品上新直播秀
						</view>
					</view>
				</view>
				<view class="l-all-item">
					<!-- 回放 -->
					<view class="l-top">
						<!-- back img -->
						<image class="images" src="../../static/room-bg.jpg" mode=""></image>
						<view class="l-top-history">
							<view class="l-sum">
								<view class="l-btn">回放</view>
								<view class="l-people">1.5W人观看</view>
							</view>
						</view>
						<!-- 官方名称 -->
						<view class="l-bottom-nickname">
							<view class="l-name">
								<view class="l-bottom-image"><image class="images" src="../../static/l-settion.png" mode=""></image></view>
								<view class="l-bottom-name">
									海之韵官方
								</view>								
							</view>
						</view>
					</view>
					<view class="l-bottom-tittle">
						<view class="l-name">
							海之韵新品上新直播秀
						</view>
					</view>
				</view>
				<view class="l-all-item">
					<!-- 回放 -->
					<view class="l-top">
						<!-- back img -->
						<image class="images" src="../../static/room-bg.jpg" mode=""></image>
						<view class="l-top-history">
							<view class="l-sum">
								<view class="l-btn">回放</view>
								<view class="l-people">1.5W人观看</view>
							</view>
						</view>
						<!-- 官方名称 -->
						<view class="l-bottom-nickname">
							<view class="l-name">
								<view class="l-bottom-image"><image class="images" src="../../static/l-settion.png" mode=""></image></view>
								<view class="l-bottom-name">
									海之韵官方
								</view>								
							</view>
						</view>
					</view>
					<view class="l-bottom-tittle">
						<view class="l-name">
							海之韵新品上新直播秀
						</view>
					</view>
				</view>
			
			
			</view>
			<u-loadmore class="u-m-t-20 l-add-more" bg-color="#F8F8F8" :load-text="loadText" color="#D7B975" font-size="20" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
			
		</view>
	</view>
</template>

<script>
	import lpInput from "@/components/common/LpInput.vue"
	
	export default {
		components: {
			lpInput,
		},
		data() {
			return {
				placeholder:"搜索想要的内容/主播/商品",
				list: [{
						name: '全部'
					}, {
						name: '关注'
					}, {
						name: '服装'
					}, {
						name: '美妆'
					}, {
						name: '家居'
				}],
				current: 0,
				// 触底
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '粉丝数据加载完毕~'
				},
				loadStatus:"loading",
			}
		},
		onLoad() {

		},
		onReachBottom(){
			// this.addRandomData()
			this.loadStatus = 'loading';
			setTimeout(() => {
				this.loadStatus = 'loadmore';
			}, 2000)
		},
		methods: {
			// 加载更多
			addRandomData() {
				
				console.log("addmore")
				// this.getUppersList()
				if(this.current == 1){
					this.loadStatus = 'loading';
					// this.getMoreFansList();
				}else{
					this.loadStatus = 'loading';
					// this.getUppersList();
				}
			},
			top_search(e) {
				console.log(e)
			},
			change(index) {
				console.log(index)
				this.current = index;
			}
		}
	}
</script>

<style lang="scss">
.l-title-top{
		position: fixed;
		top: 0rpx;
		width: 100vw;
		z-index: 999;
		background: #FFFFFF;
	}
	.l-zanwei{
		height: 186rpx;
	}
.l-tabs-title{
	width: 100vw;
	padding: 0 100rpx;
	background: #FFFFFF;
}
.l-main-list{
	padding: 20rpx 30rpx;
	.l-all-list{
		// height: 570rpx;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		.l-all-item{
			width: 45vw;
			border-radius: 20rpx;
			overflow: hidden;
			margin-bottom: 20rpx;
			.l-top{
				position: relative;
				height: 496rpx;
				.images{
					width: 100%;
					height: 496rpx;
				}
				.l-top-history{
					position: absolute;
					top: 25rpx;
					left: 20rpx;
					.l-sum{
						height: 38rpx;
						display: flex;
						justify-content: flex-start;
						align-items: center;
						background:rgba(0,0,0,1);
						font-size: 20rpx;
						color: #FFFFFF;
						border-radius: 29rpx;
						.l-btn{
							height: 100%;
							padding: 5rpx 15rpx;
							background-color: rgba(214,185,117,1);
							border-radius: 29rpx;
						}
						.l-people{
							padding: 5rpx 15rpx;
						}
					}
				}
				.l-bottom-nickname{
					position: absolute;
					bottom: 14rpx;
					left: 20rpx;
					.l-name{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						.l-bottom-image{
							width: 46rpx;
							height: 46rpx;
							border-radius: 46rpx;
							overflow: hidden;
							margin-right: 10rpx;
							.images{
								width: 46rpx;
								height: 46rpx;
							}
						}
						.l-bottom-name{
							font-size:22rpx;
							font-family:PingFang SC;
							font-weight:bold;
							color:rgba(255,255,255,1);
						}
					}
				}
			}
			.l-bottom-tittle{
				padding: 19rpx 0 30rpx 20rpx;
				background: #FFFFFF;
				.l-name{
					font-size:26rpx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(51,51,51,1);
				}
			}
		}
	}
}
</style>
