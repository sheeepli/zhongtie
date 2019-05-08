<template>
		<view class="wrap">
			<view class="status-bar"></view>
			<view class="header">
				<view class="header-left">
					<navigator open-type="navigateBack" delta="1" style="height: 42upx; width: 42upx;">
						<image src="../../static/img/left_arrow.png" mode=""></image>
					</navigator>
				</view>
				<view class="header-title">资料管理</view>
				<view class="header-right"></view>
			</view>
			<view class="content">
				<view class="form-group-list" v-for="(item, index) in list" :key="index">
					<view class="input-group group" v-for="(el, i) in item" :key="i">
						<view class="input-label">{{el.key}}</view>
						<input type="text" :value="el.value">
					</view>
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					[
						{
							key: '昵称',
							value: 'kevin'
						}, {
							key: '性别',
							value: '男'
						}
					], [
						{
							key: '邮箱',
							value: '123@163.com'
						}, {
							key: '手机号',
							value: '12345678910'
						}
					]
				]
			};
		}
	}
</script>

<style lang="less">

</style>
