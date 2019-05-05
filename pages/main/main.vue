<template>
	<view class="content">

	</view>
</template>

<script>
	export default {
		onLoad() {
			let hasLogin = uni.getStorageSync('account')
			if (!hasLogin) {
				uni.reLaunch({
					url: '../login/login'
				})
			} else {
				uni.switchTab({
					url: '../know/know'
				})
			}

		}
	}
</script>

<style>
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul {
		font-size: 30upx;
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul>view {
		line-height: 50upx;
	}
</style>
