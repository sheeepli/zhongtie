<template>
	<view>

	</view>
</template>

<script>
	export default {
		onLoad() {
			let hasLogin = uni.getStorageSync('account')
			console.log("hasLogin: " + JSON.stringify(hasLogin));
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
</style>
