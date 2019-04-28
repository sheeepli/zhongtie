<template>
	<view class="wrap">
		<view class="header">
			<view class="statusBar">
				
			</view>
			<view class="actionHeader">
				<navigator open-type="navigateBack" delta="1" style="height: 36upx; width: 36upx;">
					<image src="../../static/img/left_arrow.png" mode=""></image>
				</navigator>
				<view class="headerTitle">
					{{title}}
				</view>
				<navigator style="height: 36upx; width: 36upx;">
					<icon type="search" size="20"/>
				</navigator>
			</view>
		</view>
		<view class="content">
			<uni-swipe-action :options="options" class="list" @click="bindClick">
				<view class='item' @tap="openPage">
					<view class="itemContent">
						<image src="../../static/img/img_1.png" mode=""></image>
						<view class="itemMain">
							<view class="itemTitle">
								盾构机故障解决方案.png
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
	export default {
		components: {
			uniSwipeAction
    },
		data() {
			return {
				title: '',
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
            }]
			};
		},
		onLoad(option) {
			// this.title = option.id;
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
			}
		}
	}
</script>

<style lang="less">
  .wrap {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
		.header {
			// height: 128upx;
			.statusBar {
				height: var(--status-bar-height);
			}
			.actionHeader {
				height: 80upx;
				display: flex;
				font-size: 36upx;
				justify-content: space-between;
				padding: 0 20upx;
				align-items: center;
				
			}
			image {
				width: 36upx;
				height: 36upx;
			}
		}
		.content {
			flex: 1;
			background: red;
			height: 100%;
			overflow: scroll;
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
	}
</style>
