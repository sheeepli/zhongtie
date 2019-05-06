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
			<view class="userMsg">
				<image class="album" :src="useralbum"></image>
				<view class="msg">
					<text class="LV">L V {{userLV}}</text>
					<text class="name">{{userName}}</text>
				</view>
				<view class="right">
					用户主页
					<image src="../../static/img/right_arrow.png" mode="" class="right-arrow"></image>
				</view>
			</view>
			<view class="list" v-for="(item,index) in list" :key="index">
				<view class="item" v-for="(el,i) in item" :key="i" @tap="openPage(el.pageName)">
					<image class="icon" :src="el.iconUrl">{{el.icon}}</image>
					<view class="text">{{el.text}}</view>
					<image class="right-arrow" src="../../static/img/right_arrow.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				useralbum: '../../static/img/album.png',
				userLV: 1,
				userName: '王某人',
				list: [
					[{
						iconUrl: '../../static/img/resources.png',
						text: '资源',
						pageName: 'resources'
					}], [{
						iconUrl: '../../static/img/downloads.png',
						text: '下载',
						pageName: 'downloads'
					}, {
						iconUrl: '../../static/img/attention.png',
						text: '关注',
						pageName: 'attention'
					}, {
						iconUrl: '../../static/img/share.png',
						text: '分享',
						pageName: 'share'
					}, {
						iconUrl: '../../static/img/collection.png',
						text: '收藏',
						pageName: 'collection'
					}], [{
						iconUrl: '../../static/img/messages.png',
						text: '消息',
						pageName: 'messages'
					}], [{
						iconUrl: '../../static/img/evaluation.png',
						text: '评价',
						pageName: 'evaluation'
					}]
				]
			};
		},
		methods: {
			openPage(pageName) {
				uni.navigateTo({
					url: `../${pageName}/${pageName}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		onLoad() {
			// uni.request({
			// 	url: `http://192.168.2.168:7089/default/@zopen.papi:getProfileInfo`,
			// 	method: 'POST',
			// 	complete: (res) => {
			// 		console.log("res: " + JSON.stringify(res));
			// 	}
			// })
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
	.content {
		.userMsg {
			display: flex;
			padding: 33upx 20upx;
			align-items: center;
			background: #fff;
			.album {
				height: 130upx;
				width: 130upx;
				border-radius: 50%;
			}
			.msg {
				display: flex;
				flex-direction: column;
				align-content: center;
				justify-content: flex-start;
				margin-left: 35upx;
				flex: 1;
				.LV {
					background: #f8cf13;
					color: #fff;
					font-size: 26upx;
					padding: 0 8upx;
					border-radius: 26upx;
					width: auto;
					max-width: 70upx;
					text-align: center;
				}
				.name {
					font-size: 34upx;
				}
			}
			.right {
				color: #999;
				font-size: 26upx;
				display: flex;
				align-items: center;
			}
		}
		.list {
			margin-top: 20upx;
			.item {
				display: flex;
				align-items: center;
				padding: 0 20upx;
				height: 100upx;
				border-bottom: 1upx solid #eee;
				background: #fff;
					.icon {
						height: 45upx;
						width: 45upx;
					}
					.text {
						flex:1;
						padding-left: 20upx;
					}
					
			}
		}
	}
	.right-arrow {
		height: 30upx;
		width: 30upx;
		display: block;
	}
</style>
