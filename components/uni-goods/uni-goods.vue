<template>
	<view>
		<view class="sumNum">共11件商品</view>
	<view class="goods_list dis cl">
		<view class="goods_item dis" v-for="(item,id) in goos_list" :key="item.id">
			
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goos_list:[
					{
						id:'1',
						name:'日系印花连帽工装棉服男ins潮流',
						tag:'官方',//标签
						imgUrl:'',
						price:'9.9',
						stock:'',//库存
						sales:'',//销量
					}
				]
			};
		}
	}
</script>

<style lang="scss">
	.sumNum{
		font-size:27rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		margin: 27rpx;
		padding-top: 20rpx;
	}
	.goods_list{
		width: 100%;
		.goods_item{
			width:695rpx;
			height:199rpx;
			background:rgba(255,255,255,1);
			border-radius:14px;
		}
	}

</style>
