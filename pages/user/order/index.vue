<template>
	<view class="scroll-container" :style="{ height: `${windowHeight}px`}">
		<view class="scroll-tabs">
			<u-tabs
				active-color="#D7B975"
				bar-width="106"
				bar-height="4"
				height="70"
				:list="goodsTab"
				:is-scroll="false"
				:current="tabIndex"
				@change="tabChange"
			></u-tabs>
		</view>
		<view class="scroll-content">
			<swiper
				class="scroll-swiper"
				:current="tabIndex"
				:indicator-dots="false"
				@change="swiperChange"
			>
				<block v-for="(item, index) in goodsTab" :key="index">
					<swiper-item>
						<scroll-view
							class="scroll-content"
							scroll-y="true"
							refresher-enabled=false
							@scrolltolower="scroll"
						>
							<order-list :listData="item.list"></order-list>
						</scroll-view>
					</swiper-item>
				</block>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import orderList from "@/components/my-order-list/index.vue"
	import { orderListApi } from '../../../common/api/api.js'
	export default {
		components: {
			orderList,
		},
		
		data() {
			return {
				triggered:true,
				tabIndex: 0,
				goodsTab: [
					{ 
						name: '全部',
						list: [1,2,3,4],
						churrent: 1,
					},
					{ 
						name: '待付款',
						list: [1,2,3],
						current: 1,
					},
					{ 
						name: '待发货',
						list: [1,2],
						current: 1,
					},
					{
						name: '待收货',
						list: [1],
						current: 1,
					},
					{
						name: '待评价',
						list: [],
						current: 1,
					}
				],
			}
		},
		onLoad() {
			this.setHeight()
			this.getList()
		},
		onPullDownRefresh() {
						this.onPullDownHandle()
		    },
		methods: {
			onPullDownHandle(){
				if(this.tabIndex==0){
					
					uni.showToast({
						title:"全部列表项 刷新",
						icon:"none"
					})
					console.log('全部列表项 刷新');
				}else if(this.tabIndex==1){
					uni.showToast({
						title:"待付款列表项 刷新",
						icon:"none"
					})
					console.log('待付款列表项 刷新');
				}else if(this.tabIndex==2){
					uni.showToast({
						title:"待发货列表项 刷新",
						icon:"none"
					})
					console.log('待发货列表项 刷新');
				}else if(this.tabIndex==3){
					uni.showToast({
						title:"待收货列表项 刷新",
						icon:"none"
					})
					console.log('待收货列表项 刷新');
				}else if(this.tabIndex==4){
					uni.showToast({
						title:"待评价列表项 刷新",
						icon:"none"
					})
					console.log('待评价列表项 刷新');
				}
		
				setTimeout(function () {
				    uni.stopPullDownRefresh();
				}, 1000);
			},
			

			// scroll-view滑动时触发
			scroll(e) { },
			getList(){
				var orderParmas={
					pageSize: 10,
					stateType: "state_new",
					shop_id: '',
				}
				orderListApi(orderParmas).then(res=>{
					// console.log(res)
				})
			},
			// tab切换
			tabChange (index) {
				this.tabIndex = index
			},
			// swipeer切换
			swiperChange (val) {
				this.tabIndex = val.detail.current
			},
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-container{
		padding-top: 70rpx;
		width: 100%;
		height: 100%;
		.scroll-content{
			width: 100%;
			height: 100%;
			.scroll-swiper{
				width: 100%;
				height: 100%;
				.scroll-views{
					width: 100%;
					height: 100%;
				}
			}
			
		}
		.scroll-tabs{
			position: fixed;
			top: 0rpx;
			width: 100vw;
			z-index: 999;
			background: #FFFFFF;
		}
	}
</style>
