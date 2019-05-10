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
			<uni-drawer class="filterContent" :visible="showDrawer" mode="right" @close="closeDrawer" style="width: 488upx;">
				<view class="wrap">
					<view class="status-bar">
						
					</view>
					<view class="content">
						<view class="filterItem" v-for="item in filterGroup" :key="item.value">
							<view class="title">
								{{item.title}}
							</view>
							<view class="filterData">
								<view v-for="d in item.data" :class="{active: d.active}" :key="d.value" @tap="myFilter(item.value, d.value)">
									{{d.key}}
								</view>
							</view>
						</view>
					</view>
					<view class="footer">
						<view class="reset" @tap="reset">
							重置
						</view>
						<view class="submit" @tap="submit">
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
						title: '文档分类',
						value: 0,
						data: [
							{
								key: '全部',
								active: false,
								value: 0
							}, {
								key: '项目设计文件',
								active: false,
								value: 1
							}, {
								key: '项目进度文件',
								active: false,
								value: 2
							}, {
								key: '项目验收文件',
								active: false,
								value: 3
							}, {
								key: '招投标文件',
								active: false,
								value: 4
							}, {
								key: '项目计划文件',
								active: false,
								value: 5
							}
						]
					}, {
						title: '月份',
						value: 1,
						data: [
							{
								key: '全部',
								active: false,
								value: 0
							}, {
								key: '一月',
								active: false,
								value: 1,
							}, {
								key: '二月',
								active: false,
								value: 2,
							}, {
								key: '三月',
								active: false,
								value: 3,
							}, {
								key: '四月',
								active: false,
								value: 4,
							}, {
								key: '五月',
								active: false,
								value: 5,
							}, {
								key: '六月',
								active: false,
								value: 6,
							}, {
								key: '七月',
								active: false,
								value: 7,
							}, {
								key: '八月',
								active: false,
								value: 8,
							}, {
								key: '九月',
								active: false,
								value: 9,
							}, {
								key: '十月',
								active: false,
								value: 10,
							}, {
								key: '十一月',
								active: false,
								value: 11,
							}, {
								key: '十二月',
								active: false,
								value: 12,
							}
						]
					}, {
						title: '所属年度',
						value: 2,
						data: [
							{
								key: '全部',
								active: false,
								value: 0,
							}, {
								key: '2015',
								active: false,
								value: 1,
							}, {
								key: '2016',
								active: false,
								value: 2,
							}, {
								key: '2017',
								active: false,
								value: 3,
							}, {
								key: '2018',
								active: false,
								value: 4,
							}, {
								key: '2019',
								active: false,
								value: 5,
							}
						]
					}, {
						title: '文档类型',
						value: 3,
						data: [
							{
								key: '全部',
								active: false,
								value: 0
							}, {
								key: 'WBS',
								active: false,
								value: 1
							}, {
								key: '询单报价',
								active: false,
								value: 2
							}, {
								key: '采购订单',
								active: false,
								value: 3
							}
						]
					}, {
						title: '状态',
						value: 4,
						data: [
							{
								key: '全部',
								active: false,
								value: 0
							}, {
								key: '有效',
								active: false,
								value: 1
							}, {
								key: '废弃',
								active: false,
								value: 2
							}
						]
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
			},
			myFilter(key, value) {
				console.log(`${key}, ${value}`)
				// 当前 key 值和 filterGroup 数组下标相同, 如果数据存储在服务器上, 就不是这个样子的了,要换一种写法
				// this.filterGroup[key].data[value].active = !this.filterGroup[key].data[value].active
				this.filterGroup.forEach(item => {
					if (item.value == key) {
						item.data.forEach((e,i,arr) => {
							if (value == 0) {
								e.active = false
							} else {
								arr[0].active = false
							}
							if (e.value == value) {
								e.active = !e.active
							}
						})
					}
				})
			},
			submit() {
				let submitArr = []
				this.filterGroup.forEach(item => {
					let obj = {}
					obj.value = item.value
					obj.data = []
					item.data.forEach(e => {
						if (e.active == true) {
							obj.data.push(e.value)
						}
					})
					submitArr.push(obj)
				})
				console.log(JSON.stringify(submitArr));
			},
			reset() {
				this.filterGroup.forEach(item => {
					item.data.forEach(e => {
						e.active = false
					})
				})
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
		.filterContent {
			background: #fff;
			.content {
				background: #fff;
			}
			.filterItem {
				padding: 20upx 10upx;
				border-bottom: #eee solid 1upx;
				.title {
					font-size: 26upx;
					color: #666;
					padding-left: 10upx
				}
				.filterData {
					display: flex;
					flex-wrap: wrap;
					font-size: 26upx;
					color: #fff;
					view {
						padding: 4upx 10upx;
						background: #eee;
						border-radius: 10upx;
						margin: 10upx;
					}
					.active {
						color: #00d2f1;
						background: #d6f3f7;
					}
				}
			}
			.footer {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				padding: 0 20upx 88upx;
				box-sizing: border-box;
				view {
					height: 70upx;
					width: 175upx;
					font-size: 32upx;
					color: #fff;
					text-align: center;
					line-height: 70upx;
				}
				.reset {
					background: #ff3b3b;
					border-top-left-radius: 35upx;
					border-bottom-left-radius: 35upx;
					margin-right: 1upx;
				}
				.submit {
					background: #00d2f1;
					border-top-right-radius: 35upx;
					border-bottom-right-radius: 35upx;
				}
			}
		}
		
	}
</style>
