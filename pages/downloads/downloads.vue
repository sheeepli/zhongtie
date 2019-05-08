<template>
	<view class="wrap">
		<view class="status-bar"></view>
		<view class="header">
			<view class="header-left">
				<navigator open-type="navigateBack" delta="1" style="height: 42upx; width: 42upx;">
					<image src="../../static/img/left_arrow.png" mode=""></image>
				</navigator>
			</view>
			<view class="header-title">下载</view>
			<view class="header-right"></view>
		</view>
		<view class="search">
			<view @tap="openPage('search')">
				<icon type="search" size="18"/>
				<text>
					搜索
				</text>
			</view>
		</view>
		<view class="content">
			<view class="list" v-for="i in 10" :key="i">
				<view class='item' @tap="openPage">
					<view class="itemContent">
						<image src="../../static/img/img_1.png" mode=""></image>
						<view class="itemMain">
							<view class="itemTitle">
								{{i}}.盾构机故障解决方案.png
							</view>
							<view class="itemText">
								盾构机故障解决方案，是专为盾构故障问题而写的解决方案大全；盾构机故障解决方案，是专为盾构机故障解决方案，是专为盾构故障问题而写的解决方案大全；盾构机故障解决方案，是专为……
							</view>
						</view>
					</view>
					<view class="itemFooter">
						<view>
							贡献:李某某
						</view>
						<view>
							2019-01-06 12：00
						</view>
						<view>
							<image src="../../static/img/star.png" mode=""></image>
							<text>10</text>
						</view>
						<view>
							<image src="../../static/img/read.png" mode=""></image>
							<text>10</text>
						</view>
						<view>
							<image src="../../static/img/download.png" mode=""></image>
							<text>5.0分</text>
						</view>
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
		},
		methods: {
			openPage(pageName) {
				uni.navigateTo({
					url: `../${pageName}/${pageName}`,
				});
			}
		}
	}
</script>

<style lang="less">
	.search {
		background: #eee;
		padding: 20upx;
		box-sizing: border-box;
	
		view {
			text-align: center;
			height: 64upx;
			border-radius: 32upx;
			background: #fff;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		
		text {
			font-size: 26upx;
			color: #999;
		}
	}
	.content {
		.item {
			padding: 20upx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-bottom: 20upx;
			background: #fff;

			.itemContent {
				display: flex;
				justify-content: space-between;

				image {
					height: 112upx;
					width: 98upx;
					border-radius: 10upx
				}

				.itemMain {
					width: 580upx;

					.itemTitle {
						font-size: 32upx;
						color: #333;
					}

					.itemText {
						font-size: 26upx;
						color: #666;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
			}

			.itemFooter {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				color: #999;
				font-size: 24upx;
				margin-top: 20upx;

				view {
					display: flex;
					justify-content: center;
					align-items: center;

					image {
						height: 28upx;
						width: 28upx;
					}
				}
			}
		}
	}
</style>
