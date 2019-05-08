<template>
	<view class="wrap">
		<view class="status-bar"></view>
		<view class="header">
			<view class="header-left">
				<navigator open-type="navigateBack" delta="1" style="height: 42upx; width: 42upx;">
					<image src="../../static/img/left_arrow.png" mode=""></image>
				</navigator>
			</view>
			<view class="header-title">消息</view>
			<view class="header-right"></view>
		</view>
		<view class="content">
			<!-- <view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="item.img"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{item.title}}</view>
							<view class="uni-media-list-text-bottom uni-ellipsis">{{item.content}}</view>
						</view>
					</view>
				</view>
			</view> -->
			<view class="list">
				<view class="item" v-for="i in 10" :key="i">
					<view class="item-img">
						<image src="../../static/img/album.png" mode=""></image>
						<text class="badge">1</text>
					</view>
					<view class="item-main">
						<text>提到我的</text>
						<image src="../../static/img/right_arrow.png" mode="" class="right-arrow"></image>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.list {
		margin-top:20upx;
		.item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			padding-left: 20upx;
			:last-child {
				.item-main {
					border: none;
				}
			}
			
			.item-img {
				height: 75upx;
				width: 75upx;
				position: relative;
				image {
					height: 100%;
					width: 100%;
					display: block;
					border-radius: 50%;
				}
				.badge {
					height: 30upx;
					width: 30upx;
					text-align: center;
					line-height: 30upx;
					font-size: 21upx;
					color: #fff;
					position: absolute;
					background: red;
					top: -5upx;
					right: -5upx;
					border-radius: 50%;
				}
			}
			
			.item-main {
				flex: 1;
				height: 100upx;
				margin-left: 20upx;
				border-bottom: 1upx solid #eee;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-right: 20upx;
				font-size: 28upx;
				
			}
		}
	}
	.right-arrow {
	  height: 30upx;
		width: 30upx;
	}
	
</style>
