<template>
	<view class="wrap">
		<view class="status-bar">
				
		</view>
		<view class="header">
			<view class="header-left">
				<!-- 能不能不添加这两个元素做到居中呢？？？ -->
			</view>
			<view class="header-title">
				知识库
			</view>
			<view class="header-right">
				
			</view>
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
			<view class="libraryMain">
				<view class="title">
					<text>知识库</text>
				</view>
				<view class="libraryList">
					<view class="libraryItem" v-for="lib in libraryList" :key="lib.id" @tap="openPage('libDetail', lib.id)">
						<image :src="lib.imgUrl" mode="aspectFit"></image>
						<text>{{lib.text}}</text>
					</view>
				</view>
			</view>
			<view class="caseMain">
				<view class="title">
					<text>盾构案例</text>
					<view class="more">
						<text>更多</text>
						<image src="../../static/img/right_arrow.png" mode=""></image>
					</view>
				</view>
				<view class="caseList">
					<view class="caseItem" v-for="i in 10" :key='i'>
						<image src="../../static/img/caseImg.png" mode=""></image>
						<view class="itemMain">
							<text class="itemTitle">员工活动参与记录</text>
							<view>
								<text class="itemText">专辑描述：记录公司产品部人员参与和组织的活动。时间轴的应用场景，由于产品部人组织的活动。时间轴的应用场景，由于产品部人由于产品部人</text>
							</view>
							<view class="itemFooter">
								<text>2019-04-26</text>
								<text>|</text>
								<text>200阅读</text>
								<text>|</text>
								<text>200收藏</text>
							</view>
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
				libraryList: [],
				caseList: [{
					id: 0,
					title: '',
					textContent: '',
					time: '',
					read: 0,
					collect: 0,
				}]
			};
		},
		onLoad() {
			uni.setStorage({
				key: 'libList',
				data: [{
					id: '1',
					imgUrl: '../../static/img/library_1.png',
					text: '内部规范制度资料库'
				}, {
					id: '2',
					imgUrl: '../../static/img/library_2.png',
					text: '盾构施工常见问题库'
				}, {
					id: '3',
					imgUrl: '../../static/img/library_3.png',
					text: '内部规范制度资料库'
				}, {
					id: '4',
					imgUrl: '../../static/img/library_4.png',
					text: '内部规范制度资料库'
				}, {
					id: '5',
					imgUrl: '../../static/img/library_5.png',
					text: '内部规范制度资料库'
				}, {
					id: '6',
					imgUrl: '../../static/img/library_6.png',
					text: '内部规范制度资料库'
				}]
			})
			
			uni.getStorage({
				key: 'libList',
				success: (res) => {
					this.libraryList = res.data
				}
			})
		},
		methods: {
			openPage(pageName, id) {
				let url = ''
				if (id) {
					url = `../${pageName}/${pageName}?id=${id}`
				} else {
					url = `../${pageName}/${pageName}`
				}
				uni.navigateTo({
					url
				})
			}
		},
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

	.caseMain {
		background: #fff;

		.title {
			border-bottom: 1upx solid #dddddd;
			padding: 10upx 20upx;
			font-size: 36upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.more {
				font-size: 26upx;
				color: #999;
				display: flex;
				align-items: center;

				image {
					height: 26upx;
					width: 26upx;
				}
			}
		}

		.caseItem {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			padding: 20upx;


				image {
					border-radius: 10upx;
					height: 171upx;
					width: 313upx;
					display: block;
				}

			.itemMain {
				width: 375upx;
				display: flex;
				align-content: space-around;
				justify-content: space-between;
				flex-direction: column;

				.itemTitle {
					font-size: 30upx;
					color: #333;
					line-height: 1;
					margin-bottom: 10upx;
				}

				.itemText {
					font-size: 26upx;
					color: #666;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					line-height: 1.4;
					text-indent: 52upx;
				}

				.itemFooter {
					font-size: 24upx;
					color: #999;
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
</style>
