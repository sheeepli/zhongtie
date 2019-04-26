<template>
	<view class="content">
		<view class="search" style="background: #eee; padding: 20upx; box-sizing: border-box;">
			<view class="" style="text-align: center; height: 64upx; border-radius: 32upx; background: #fff; margin: 0 auto; display: flex; align-items: center;justify-content: center;">
				<icon type="search" size="20" style="vertical-align: middle;"/>
				<text style="font-size: 26upx;color: #999;">
					搜索
				</text>
			</view>
		</view>
		<view class="libraryMain">
			<view class="">
				<text class="title">知识库</text>
			</view>
			<view class="libraryList">
				<view class="libraryItem" v-for="lib in libraryList" :key="lib.id">
					<image :src="lib.imgUrl" mode=""></image>
					<text>{{lib.text}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				libraryList: [
					{
						id: '0',
						imgUrl: '../../static/img/library_1.png',
						text: '内部规范制度资料库'
					}, {
						id: '0',
						imgUrl: '../../static/img/library_2.png',
						text: '盾构施工常见问题库'
					}, {
						id: '0',
						imgUrl: '../../static/img/library_3.png',
						text: '内部规范制度资料库'
					}, {
						id: '0',
						imgUrl: '../../static/img/library_4.png',
						text: '内部规范制度资料库'
					}, {
						id: '0',
						imgUrl: '../../static/img/library_5.png',
						text: '内部规范制度资料库'
					}, {
						id: '0',
						imgUrl: '../../static/img/library_6.png',
						text: '内部规范制度资料库'
					}, 
				]
			};
		}
	}
</script>

<style lang="less">
	.libraryMain {
		background: #fff;
		padding: 20upx 0;
		margin-bottom: 20upx;
		.title {
			font-size: 36upx;
			padding-left: 20upx;
		}
		.libraryList {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;
			.libraryItem {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 345upx;
				height: 135upx;
				background: #d8f4ff;
				border-radius: 8upx;
				margin-top: 20upx;
				image {
					height: 80upx;
					width: 80upx;
				}
				text {
					font-size: 26upx;
				}
			}
		}
	}
	
</style>
