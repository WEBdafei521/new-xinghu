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
				tabIndex: null,
				goodsTab: [
					{ 
						name: '全部',
						list: [1,2,3,4],
						current: 1,
						tabName:"all"
					},
					{ 
						name: '待付款',
						list: [1,2,3],
						current: 1,
						tabName:"unPay"
					},
					{ 
						name: '待发货',
						list: [1,2],
						current: 1,
						tabName:"unSend"
					},
					{
						name: '待收货',
						list: [1],
						current: 1,
						tabName:"unRecove"
					},
					{
						name: '待评价',
						list: [],
						current: 1,
						tabName:"unArgument"
					}
				],
				curPages: [1,1,1,1],
			}
		},
		// 进入订单列表后，
			// 首先发起五次u请求，
			// 然后分别将五个状态的顶大列表请求过来，、
			// 最后根据点击的tabindex在进行数据处理
		onLoad(options) {
			// 获取上一页面的数据
			this.tabIndex = options.type
			this.getList(options.type)
		
			this.setHeight()
		},
		// 下拉
		onPullDownRefresh() {
						this.onPullDownHandle()
		},
		// 触底
		onReachBottom(){
			
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
			addOrderToView(list){
				this.goodsTab[this.tabIndex].list.push(list) 
			},
			
			// scroll-view滑动时触发
			scroll(e) {
				// console.log(e)
				var tabIndex = this.tabIndex
				this.goodsTab[tabIndex].current++;
				this.getList(tabIndex)
				console.log("触底了")
			},
			getList(index){
				var page = 0;
				if(index){
					page = this.goodsTab[index].current 
				}
				var orderType = this.getOrderType(index)
				var that = this
				var orderParmas={
					"page": page,
					"rows": 10,
					"stateType":orderType
				}
				orderListApi(orderParmas).then(res=>{
					that.addOrderToView(res.list)
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
			// 根据传过来的 索引 筛选出 ordertype 类型
			getOrderType(index){
				return this.goodsTab[index].tabName
			}
		},
		watch:{
			tabIndex (old,new1){
			}　
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
