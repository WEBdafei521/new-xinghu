<template>
    <view>
      <view class="l-title-top">
      	<!-- 输入框 -->
      	<lp-input :placeholder="placeholder" @search_inp="top_search"></lp-input>
      	<view class="swiper">
      		<u-tabs :list="tab_bar" active-color="#D7B975" :is-scroll="false" :current="current" @change="change"></u-tabs>
      	</view>
      </view>
      <view class="l-zanwei"></view>
			<view class="l-swiper-list">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item>
								<view class="swiper-item uni-bg-red">A</view>
						</swiper-item>
						<swiper-item>
								<view class="swiper-item uni-bg-green">B</view>
						</swiper-item>
						<swiper-item>
								<view class="swiper-item uni-bg-blue">C</view>
						</swiper-item>
				</swiper>
			</view>
    </view>
</template>

<script>
	import lpInput from "@/components/common/LpInput.vue"
	
	export default {
		components: {
			lpInput,
		},
		data () {
			return {
				tab_bar: [{
					name: ''
				}, {
					name: '我的邀请'
				}, {
					name: '我的邀请'
				}, {
					name: '我的邀请'
				}, {
					name: '我的邀请'
				}],
				goodsTab: [
					{ 
						name: '直播间',
						list: [],
						current: 1,
					},
					{ 
						name: '商城中',
						list: [],
						current: 1,
					},
					{ 
						name: '仓库中',
						list: [],
						current: 1,
					}
				],
				current: 0,
			}
		},
		onLoad() {
		  
		},
		created () {},
			
		methods: {
			change(index) {
				this.current = index;
				if(this.current == 0){
					
					return
				}
				//切换的时候获取一下当前用户信息，这是首页中唯一用到token的地方
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.l-title-top {
		position: fixed;
		top: 0rpx;
		width: 100vw;
		z-index: 999;
		background: #FFFFFF;
	}
	.l-zanwei {
		height: 186rpx;
	}
</style>
