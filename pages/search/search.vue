<template>
	<view class="wrap">
		<view class="status-bar">
			
		</view>
		<view class="header">
			<view class="header-left">
				<navigator open-type="navigateBack" delta="1" style="height: 42upx; width: 42upx;">
					<image src="../../static/img/left_arrow.png" mode="aspectFit"></image>
				</navigator>
			</view>
			<view class="header-search">
				<icon type="search" size="12"/>
				<input class="uni-input" confirm-type="search"
					placeholder="输入你要搜索的内容"
					v-model="searchValue"
					focus="true"
					@confirm="setSearchValue"/>
			</view>
			<view class="header-right">
				<navigator open-type="navigateBack">
					取消
				</navigator>
			</view>
		</view>
		<view class="content">
			<view class="tip">
				搜索指定页内容
			</view>
			<view class="classify">
				<text @tap="search(0)">知识</text>
				|
				<text @tap="search(1)">圈子</text>
				|
				<text @tap="search(2)">问答</text>
				|
				<text @tap="search(3)">帖子</text>
				|
				<text @tap="search(4)">专家</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: '',
			};
		},
		methods: {
			setSearchValue(e) {
				this.searchValue = e.target.value
				this.search()
			},
			search(index) {
				console.log(index)
				// 页面内容点击传参，调用这个函数然后发起请求
			}
		}
	}
</script>

<style lang="less">
  .header {
		.header-search {
			height: 52upx;
			font-size: 26upx;
			background: #eee;
			border-radius: 44upx;
			width: 100%;
			overflow: hidden;
			padding: 0 20upx;
			box-sizing: border-box;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex: 1;
			margin: 0 20upx;
			input {
				flex: 1;
				margin-left: 14upx;
				height: 52upx;
			}
			
		}
		.header-right {
			font-size: 26upx;
			color: #00d2f1;
			flex: none;
		}
		
		.header-left {
			flex: none;
		}
	}
	.content{
		background: #fff;
		.tip {
			text-align: center;
			font-size: 26upx;
			color: #999;
			margin: 100upx auto 35upx;
		}
		.classify {
			display: flex;
			justify-content: space-evenly;
			padding: 0 20upx;			
			font-size: 26upx;
			color: #eee;
			text {
				color: #00d2f1;
			}
		}
	}
</style>
