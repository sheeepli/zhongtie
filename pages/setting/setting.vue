<template>
	<view class="wrap">
		<view class="status-bar">
			
		</view>
		<view class="header">
			<view class="header-left">
				<navigator open-type="navigateBack" delta="1" style="height: 42upx; width: 42upx;">
					<image src="../../static/img/left_arrow.png" mode="aspectFit"></image>
				</navigator>
			</view>
			<view class="header-title">
				设置
			</view>
			<view class="header-right">
			</view>
		</view>
		<view class="content">
			<view class="" @tap="openPage('management')">
				<text>资料管理</text>
				<image src="../../static/img/right_arrow.png" class="right-arrow" mode=""></image>
			</view>
			<view class="" @tap="openPage('reminder')">
				<text>消息提醒</text>
				<image src="../../static/img/right_arrow.png" class="right-arrow" mode=""></image>
			</view>
			<text class="logout">退出登录</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			openPage(pageName) {
				uni.navigateTo({
					url: `../${pageName}/${pageName}`
				});
			},
			logout() {
				uni.clearStorageSync()
				uni.reLaunch({
					url: `../login/login`
				})
			}
		},
	}
</script>

<style lang="less">
	.content {
		text {
			font-size: 28upx;
		}
		view {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 20upx;
			height: 100upx;
			margin-top: 20upx;
			background: #fff;
			image {
				height: 30upx;
				width: 30upx;
				display: block;
			}
		}
		.logout {
			margin-top: 20upx;
			background: #fff;
			height: 100upx;
			line-height: 100upx;
			text-align: center;
			width: 100%;
		}
	}
</style>
