<template>
	<view class="wrap">
		<view class="status-bar"></view>
		<view class="header">
			<view class="header-left">
				<navigator open-type="navigateBack" delta="1">
					<image src="../../static/img/left_arrow.png" mode=""></image>
				</navigator>
			</view>
			<view class="header-title">
				消息提醒
			</view>
			<view class="header-right"></view>
		</view>
		<view class="content">
			<view class="form-group-list">
				<view class="switch-group group">
					<view class="input-label">新消息通知</view>
					<switch :checked="newMsg" color="#00D2F1" @change="switchChange('newMsg')" />
				</view>
				<view class="switch-group group">
					<view class="input-label">与我相关通知</view>
					<switch :checked="aboutMe" color="#00D2F1" @change="switchChange('aboutMe')" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newMsg: true,
				aboutMe: false
			};
		},
		methods: {
			switchChange(name) {
				this[name] = !this[name]
			}
		}
	}
</script>

<style lang="less">

</style>
