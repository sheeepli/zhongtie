<template>
	<view class="wrap">
		<view class="status-bar">

		</view>
		<view class="header">
			<view class="header-left">
				<navigator open-type="navigateBack" delta="1" style="height: 36upx; width: 36upx;">
					<image src="../../static/img/left_arrow.png" mode="aspectFit"></image>
				</navigator>
			</view>
			<view class="header-title">
				{{title}}
			</view>
			<view class="header-right">
				<navigator url="../innerSearch/innerSearch?id={id}" style="height: 36upx; width: 36upx;margin-left: 20upx;">
					<icon type="search" size="20" />
				</navigator>
				<navigator url="../innerSearch/innerSearch?id={id}" style="height: 36upx; width: 36upx;margin-left: 20upx;">
					<icon type="search" size="20" />
				</navigator>
				<navigator url="../innerSearch/innerSearch?id={id}" style="height: 36upx; width: 36upx;margin-left: 20upx;">
					<icon type="search" size="20" />
				</navigator>
			</view>
		</view>
		<view class="switchBar">
			<view @tap="getMsg(0)" :class="{active:current == 0}">最新知识</view>
			<view @tap="getMsg(1)" :class="{active:current == 1}">最热知识</view>
			<view class="filter" @tap="showFilter">
				<text>筛选</text>
				<image src="../../static/img/filter.png"></image>
			</view>
		</view>
		<view class="content">
			<uni-drawer :visible="showDrawer" mode="right" @close="closeDrawer" style="width: 488upx;">
				<view class="wrap">
					<view class="status-bar">
						
					</view>
					<view class="content">
						<view class="filterItem">
							
						</view>
					</view>
					<view class="footer">
						<view class="reset">
							重置
						</view>
						<view class="submit">
							确定
						</view>
					</view>
				</view>
				
			</uni-drawer>
			<uni-swipe-action :options="options" class="list" @click="bindClick" v-for="i in 10" :key="i">
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
			</uni-swipe-action>
		</view>

	</view>
</template>

<script>
	import uniSwipeAction from "@/components/uni-swipe-action/uni-swipe-action.vue";
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue";
	export default {
		components: {
			uniSwipeAction,
			uniDrawer,
		},
		data() {
			return {
				id: '',
				title: '',
				current: 0,
				showDrawer: false,
				options: [{
					text: '收藏',
					style: {
						backgroundColor: '#fbd731'
					}
				}, {
					text: '分享',
					style: {
						backgroundColor: '#00d2f1'
					}
				}],
				filterGroup: [
					{
						title: '月份'
					}
				]
			};
		},
		onLoad(option) {
			this.id = option.id;
			uni.getStorage({
				key: 'libList',
				success: (res) => {
					this.title = res.data.filter(item => item.id == option.id)[0].text
				}
			})
		},
		methods: {
			bindClick(btn) {
				if (btn.index === 1) {
					console.log('分享');
				} else if (btn.index === 0) {
					console.log('收藏');
				}
			},
			openPage() {
				console.log(111)
			},
			getMsg(index) {
				this.current = index;
				// 根据 index 获取数据
			},
			showFilter() {
				this.showDrawer = true
			},
			closeDrawer() {
				this.showDrawer = false
			}
		}
	}
</script>

<style lang="less">
	.header {
		border-bottom: 1upx solid #ddd;
	}

	.switchBar {
		display: flex;
		justify-content: space-evenly;
		font-size: 32upx;
		color: #999;

		view {
			padding: 20upx 0;
			position: relative;

		}

		view.active {
			color: #00d2f1;
		}

		view.active::after {
			content: '';
			width: 97upx;
			height: 4upx;
			background: #00d2f1;
			position: absolute;
			bottom: 0;
			left: 50%;
			margin-left: -48upx;
		}

		.filter {
			display: flex;
			align-items: center;

			image {
				height: 28upx;
				width: 28upx;
			}
		}
	}

	.content {
		.status-bar {
			background: #eee;
		}
		.item {
			padding: 20upx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

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
