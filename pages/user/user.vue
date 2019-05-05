<template>
	<view class="wrap">
		<view class="status-bar">
		</view>
		<view class="header">
			<view class="header-left"></view>
			<view class="header-title">我的</view>
			<view class="header-right">
				<navigator url="../setting/setting" style="height: 36upx; width: 36upx;">
					<image src="../../static/img/setting.png" mode="aspectFit"></image>
				</navigator>
			</view>
		</view>
		<view class="content">
			
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
	.status-bar {
		background: #00d2f1;
	}
	.header {
		background: #00d2f1;
		.header-title {
			color: #fff;
		}
	}
</style>
