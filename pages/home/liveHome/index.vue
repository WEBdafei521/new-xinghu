<template>
	<view
		class="room-content"
		:style="{
			'padding-top': `${headAttr.top}px`,
			'height': `${windowHeight}px`
		}"
	>
		
		<!-- title -->
		<view class="l-title l-my-flex-start">
			<!-- 点赞提示 -->
			<view>
				<image class="l-images" v-if="!is_active" src="../../../static/l_attention.png" mode=""></image>
			</view>
			<u-icon name="arrow-left" color="#ffffff" size="28"></u-icon>
			<view class="l-user-title-info l-my-flex-start">
				<image class="l-user-title-image" src="../../../static/icon/foot-liwu.png" mode=""></image>
				<view class="l-user-name-info">
					<view class="l-top">蓝狐集团</view>
					<view  class="l-bottom">1520人爱看</view>
				</view>
				<!-- 关注 -->
				<view class="l-attention" v-if="!is_active" @tap="attention">关注</view>
			</view>
		</view>
		
		<!-- 点赞数 -->
		<view class="l-zan-sum">
			<view class="aaa">
				<image class="l-images" src="../../../static/icon/icon-love.png" mode=""></image>
				<view class="l-text">666点赞</view>
			</view>
			
		</view>
		
		<!-- 右侧 红包 -->
		<view class="l-post-right">
			<!-- logo ID -->
			<view class="l-top">
				<view class="top"><image class="l-images" src="../../../static/l_live.png" mode=""></image></view>
				<view class="bottom">
					ID：00001
				</view>
			</view>
		</view>
		<!-- 右下角 商品 -->
		<view class="l-right-bottom-pro">
			<view class="l-product">
				<view class="l-top">讲解中</view>
				<image class="l-images" src="../../../static/img/room-logo.jpg" mode=""></image>
				<view class="l-price"><text>￥</text>99</view>
			</view>
		</view>
		<!-- 左下角 评论列表 -->
		<view class="l-left-bottom-arg">
			<scroll-view
				id="scrollview"
				class="scroll-view_room"
				scroll-y="true"
				enable-flex="true"
				scroll-anchoring="true"
				scroll-with-animation="true"
				:scroll-into-view="tolast"
			>
				<view class="l-argument-list">
					<view class="l-argument-item l-title">
							平台依法对直播内容进行24小时巡查,倡
						导绿色直播,维护网络文明健康。切勿与他
						人私下交易,非官方活动谨慎参与,避免上
						当受骗。
					</view>
					<view class="l-argument-item1 " v-for="(item, index) in argumentList" :key="index"  :id="`item${index + 1}`">
						<text class="l-username">{{item.name}}：</text>	{{item.content}}
					</view>
					
				</view>
			</scroll-view>
		</view>
		<!-- s输入评论 -->
		<view class="l-bottom-info ">
			<template v-if="!is_input">
				<view class="l-bottom l-my-flex-bw">
					<view class="l-left">
						<input disabled class="l-inp" placeholder="说点什么..." @click="is_input = true"></input>
					</view>
					<view class="l-right">
						<view class="l-icons l-my-flex-start"  @tap="more_product">
							<image class="l-images" src="../../../static/icon/foot-car.png" mode=""></image>
							<text class="l-text"> 橱窗 </text>
						</view>
						<view class="l-icons l-my-flex-start" @tap="more_tool">
							<image class="l-images" src="../../../static/icon/foot-more.png" mode=""></image>
							<text class="l-text"> 更多 </text>
						</view>
						<view class="l-icons l-my-flex-start">
							<image class="l-images" src="../../../static/icon/foot-liwu.png" mode=""></image>
							<text class="l-text"> 礼物 </text>
						</view>
						<view class="l-icons l-my-flex-start">
							<image class="l-images" src="../../../static/icon/foot-zan.png" mode=""></image>
							<text class="l-text"> 点赞 </text>
						</view>
					</view>
				</view>
			</template>
			<template v-else>
				<view class="foot-input-key">
					<input
						class="foot-input-key-input"
						type="text"
						focus
						placeholder="说点什么"
						placeholder-class="input-key-holder"
						confirm-type="send"
						@blur="is_input = false"
						v-model="userInputWord"
					>
					<button class="foot-input-key-button" type="default" @click="sendMsg">发送</button>
				</view>
			</template>
			
			
		</view>
		
		<!-- 更多 -->
		<u-popup
			class="room-popup"
			v-model="moreVisible"
			mode="bottom"
		>
			<foot-more />
		</u-popup>
		
		<!-- 橱窗商品 -->
		<u-popup
			class="room-popup"
			v-model="carVisible"
			mode="bottom"
		>
			<template v-if="carVisible">
				<car-list :visible="carVisible" @buyGoods="addGoods"/>
			</template>
		</u-popup>
	</view>
</template>

<script>
	import More from '../../../components/room/More.vue'
	import CarList from '../../../components/room/CarList.vue'
	export default {
	
		components: {
			'foot-more': More,
			'car-list': CarList,
		},
		data() {
			return {
				headAttr: {
					top: 44,
				},
				// 底部弹框 显示/隐藏
				moreVisible:false,
				carVisible: false,
				// 单个商品的信息
				goodsInfo:{},
				// 评论输入框的显示/隐藏
				is_active:false,
				is_input:false,
				
				// 索引id
				tolast: "",
				userInputWord:"",
				argumentList:[
					{ name: '吃货大王1', content: '买一个需要多少钱,什么时候发货' },
					{ name: '吃货大王2', content: '多少钱？' }
				]
			}
		},
		onLoad() {
			this.setHeight()
			// 将页面全屏 
			uni.getSystemInfo({
			    success: (res) => {
			        this.windowHeight = res.windowHeight
				}
			})
		},

		created () {
			// 测试登陆
			// this.loginAction()
		},
		methods: {
			more_product(){
				console.log("----")
				this.carVisible = true
			},
			// 购买
			addGoods (val) {
				this.goodsInfo = val
				this.buyVisible = true
			},
			// 更多
			more_tool(){
				this.moreVisible  = true
			},
			// 页面底部输入框 按钮 控制输入信息框显示隐藏
			say_anything(){
				this.is_input = true
			},
			// 发送评论
			sendMsg(){
				console.log("say_anything")
				if (!this.userInputWord) {
					uni.showToast({
					    title:"发送文字不能为空",
							icon: "none",
					    duration: 1000
					})
				}else{
						this.is_input = false
					let num = Math.floor(Date.parse(new Date()) / 1000000)
					// 发送消息
					let data = {
						name: '测试中' + num,
						content: this.userInputWord
					}
					this.argumentList.push(data)
					// 清空input值
					this.userInputWord = ""
					
					// 让滚动条到底部
					this.scrollToBottom()
					
				
				}
					
			},
			// 让滚动条到底部的方法
			scrollToBottom () {
				this.tolast = 'item' + this.argumentList.length
			},
			// 关注
			attention(){
				this.is_active = true
			},
			// ...mapActions(['loginAction']),
			
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-view_room{
		height: 370rpx;
		width: 100%;
	}
	// 上下移动动画
	@keyframes animate_like {
		0% {
			transform: translate(0rpx, 0rpx);
		}
		50% {
			transform: translate(0rpx, -18rpx);
		}
		100% {
			transform: translate(0rpx, 0rpx);
		}
	}
	// 放大缩小
	@keyframes animate_scale {
		0% {
			transform: scale(.9);
		}
		50% {
			transform: scale(1);
		}
		100% {
			transform: scale(.9);
		}
	}
	// animation: animate_like 2s infinite;
	.room-content{
		background-image: url(../../../static/img/room-bg.jpg);
	}
	.l-title{
		padding: 0 29rpx;
		position: relative;
		.l-images{
			width: 229rpx;
			height: 65rpx;
			position: absolute;
			left: 330rpx;
			top: 90rpx;
			animation: animate_like 2s infinite;
		}
	}
	.l-user-title-info{
		margin-left: 30rpx;
		padding-left: 84rpx;
		padding-right: 10rpx;
		height: 64rpx;
		border-radius: 64rpx;
		overflow: hidden;
		position: relative;
		background: rgba(0,0,0,.3);
		.l-user-title-image{
			position: absolute;
			width: 64rpx;
			height: 64rpx;
			left: 0;
			border-radius: 50%;
			
		}
		.l-user-name-info{
			padding-right: 30rpx;
			.l-top{
				font-size:26rpx;
				font-family:PingFang SC;
				font-weight:simple;
				color:rgba(255,255,255,1);
			}
			.l-bottom{
				font-size:20rpx;
				font-family:PingFang SC;
				font-weight:simple;
				color:rgba(255,255,255,1);
			}
		}
		.l-attention{
			height:52rpx;
			padding: 0 15rpx;
			line-height: 52rpx;
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:simple;
			color:rgba(255,255,255,1);
			background:rgba(234,163,76,1);
			border-radius:26rpx;
		}
	}
	.l-zan-sum{
		.aaa{
			width: 140rpx;
			background:rgba(0,0,0,.3);
			border-radius:15rpx;
			display: flex;
			justify-content: flex-start;
			margin-top: 26rpx;
			align-items: center;
			margin-left: 84rpx;
			padding: 2rpx 6rpx;
			.l-images{
				width: 23rpx;
				height: 20rpx;
				margin-right: 10rpx;
			}
			.l-text{
				width: 116rpx;
				text-align: center;
				font-size:20rpx;
				font-family:PingFang SC;
				font-weight:simple;
				color:rgba(255,255,255,1);
			}
		}
		
	}
	.l-post-right{
		position: fixed;
		right: 0;
		top: 206rpx;
		
		padding: 10rpx;
		.l-top{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 10rpx;
			// width: 126rpx;
			height: 80rpx;
			background:rgba(0,0,0,.3);
			border-radius:8rpx;
			.top{
				.l-images{
					width: 106rpx;
					height: 26rpx;
					
				}
			}
			.bottom{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:simple;
				color:rgba(255,255,255,1);
			}
		}
	}
	.l-right-bottom-pro{
		position: fixed;
		bottom: 260rpx;
		right: 30rpx;
		.l-product{
			padding: 10rpx;
			background:rgba(255,255,255,1);
			border-radius:16rpx;
			.l-top{
				position: absolute;
				top: 10rpx;
				left: 10rpx;
				z-index: 1;
				background:rgba(234,163,76,1);
				padding: 6rpx;
				border-radius:6rpx 0px 6rpx 0rpx;
				font-size:18rpx;
				font-family:PingFang SC;
				font-weight:simple;
				color:rgba(255,255,255,1);
			}
			.l-price{
				font-size:20rpx;
				font-family:PingFang SC;
				font-weight:simple;
				color:rgba(234,163,76,1);
			}
			.l-images{
				width:207rpx;
				height:199rpx;
				background:rgba(49,49,49,1);
				border-radius:16rpx;
			}
		}
	}
	.l-left-bottom-arg{
		position: fixed;
		left: 30rpx;
		bottom: 170rpx;
		width: 414rpx;
		.l-argument-list{
			display: flex;
			flex-direction: column;
			.l-argument-item1{
				display: inline;
				width: auto;
				white-space:normal;
				padding: 6rpx 20rpx;
				margin-bottom: 10rpx;
				background:rgba(0,0,0,.3);
				border-radius:16rpx;
				
				font-size:26rpx;
				font-family:PingFang SC;
				font-weight:simple;
				color:#FFFFFF;
				text-align: justify;
				text-justify: newspaper;
				word-break: break-all;
			}
			.l-argument-item{
				padding: 6rpx 20rpx;
				margin-bottom: 10rpx;
				width:414rpx;
				background:rgba(0,0,0,.3);
				border-radius:16rpx;
				font-size:26rpx;
				font-family:PingFang SC;
				font-weight:simple;
				color:rgba(226,211,169,1);
			}
			.l-username{
				font-size:26rpx;
				font-family:PingFang SC;
				font-weight:simple;
				color:rgba(226,211,169,1);
			}
			.l-user-word{
				
			}
		}
		.l-title{
			padding: 14rpx 15rpx;
		}
	}
	.l-bottom-info{
		position: fixed;
		bottom: 68rpx;
		width: 100%;
		.l-bottom{
			padding: 0 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.l-left{
				.l-inp{
					width:220rpx;
					height:72rpx;
					background:rgba(0,0,0,.3);
					border-radius:36rpx;
					text-align: left;
					padding: 0 31rpx;
					line-height: 72rpx;
					font-size:26rpx;
					font-family:PingFang SC;
					font-weight:simple;
					color:rgba(255,255,255,1);
					
				}
			}
			.l-right{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.l-icons{
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					margin-left: 31rpx;
					.l-text{
						color: #FFFFFF;
					}
					.l-images{
						width: 70rpx;
						height: 70rpx;
					}
				}
			}
		}
	}
	/* 键盘上面输入 */
	.foot-input-key {
		width: 100%;
		height: 104rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 30rpx;
		&-input {
			flex: 1;
			height: 104rpx;
			background: #fff;
			padding: 0 24rpx;
			box-sizing: border-box;
		}
		.input-key-holder {
			color: #B1B1B6;
		}
		&-button {
			width: 150rpx;
			height: 104rpx;
			line-height: 104rpx;
			border-radius: 0;
			background: rgb(215,185,117);
			color: #fff;
			font-size: 30rpx;
			border: 0;
			&::after {
				border-radius: 0;
				border: 0;
			}
		}
	}
</style>
