<template>
	<view class="wrap">
		<view class="status-bar"></view>
		<view class="header">
			<view class="header-left">
				<navigator open-type="navigateBack" delta="1" style="height: 42upx; width: 42upx;">
					<image src="../../static/img/left_arrow.png" mode=""></image>
				</navigator>
			</view>
			<view class="header-title">评价</view>
			<view class="header-right"></view>
		</view>
		<view class="content">
			<view class="list">
				<view class="item">
					<view class="item-header">
						<image class="album" src="../../static/img/album.png"></image>
						<text class="name">王某人</text>
						<view class="star">
							<image v-for="i in star" :key="i" src="../../static/img/has_star.png" mode=""></image>
							<image v-for="i in (5-star)" :key="i" src="../../static/img/un_star.png" mode=""></image>
						</view>
					</view>
					<view class="item-content">
						<text class="item-text">回答很及时，讲解很详细</text>
						<view class="item-main">
							<view class="item-img">
								<image src="../../static/img/album.png" mode=""></image>
							</view>
							<view class="item-body">
								<view class="item-header">
									<text class="name">李某人</text>
									<text class="LV">L V 1</text>
								</view>
								<view class="item-content">
									<text>服务次数：100</text>
									<text>综合评分：9</text>
								</view>
								<view class="item-footer">
									<text>擅长领域：市政施工</text>
								</view>
							</view>
						</view>
					</view>
					<view class="item-footer">2018-12-13 14:00</view>
				</view>
				<view class="item">
					<view class="item-header">
						<image class="album" src="../../static/img/album.png"></image>
						<text class="name">王某人</text>
						<view class="star">
							<image v-for="i in star" :key="i" src="../../static/img/has_star.png" mode=""></image>
							<image v-for="i in (5-star)" :key="i" src="../../static/img/un_star.png" mode=""></image>
						</view>
					</view>
					<view class="item-content">
						<text class="item-text">回答很及时，讲解很详细</text>
						<view class="item-main">
							<view class="item-img">
								<image src="../../static/img/album.png" mode=""></image>
							</view>
							<view class="item-body">
								<view class="item-header">
									<text class="name">李某人</text>
									<text class="LV">L V 1</text>
								</view>
								<view class="item-content">
									<text>服务次数：100</text>
									<text>综合评分：9</text>
								</view>
								<view class="item-footer">
									<text>擅长领域：市政施工</text>
								</view>
							</view>
						</view>
					</view>
					<view class="item-footer">2018-12-13 14:00</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				star: 4
			};
		}
	}
</script>

<style lang="less">
	.header {
		border-bottom: 1upx solid #eee;
	}
	.content {
		.list {
			.item {
				padding: 20upx;
				background: #fff;
				margin-bottom: 20upx;
				.item-header {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.album {
						height: 55upx;
						width: 55upx;
						border-radius: 50%;
					}
					.name {
						margin-left: 20upx;
						font-size: 26upx;
						color: #666;
					}
					.star {
						display: flex;
						justify-content: flex-start;
						image {
							margin-left: 10upx;
							height: 26upx;
							width: 26upx;
						}
					}
				}
				.item-content {
					.item-text {
						font-size: 26upx;
						color: #333;
						margin-bottom: 20upx;
					}
					.item-main {
						background: #f8f8f8;
						display: flex;
						align-items: center;
						padding: 20upx;
						margin: 10upx 0;
						.item-img {
							height: 95upx;
							width: 95upx;
							border-radius: 50%;
							overflow: hidden;
							image {
								height: 100%;
								width: 100%;
								display: block;
							}
						}
						.item-body {
							font-size: 26upx;
							.item-header {
								.name {
									color: #333;
									font-size: 32upx;
								}
								.LV {
									color: #fff;
									background: #f8cf13;
									border-radius: 26upx;
									padding: 0 8upx;
								}
							}
							.item-content,
							.item-footer {
								margin-left: 20upx;
								color: #666;
								text {
									margin-right: 20upx;
								}
							}
						}
					}
				}
				.item-footer {
					font-size: 24upx;
					color: #999;
				}
			}
		}
	}
</style>
