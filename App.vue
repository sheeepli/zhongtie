<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	/* uni-app默认全局使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。如不使用flex布局，请删除或注释掉本行。*/
	body,
	page {
		min-height: 100%;
		display: flex;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* 原生组件模式下需要注意组件外部样式 */
	m-input {
		width: 100%;
		min-height: 100%;
		display: flex;
	}
	
	.wrap {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
	}
	
	.status-bar {
		height: var(--status-bar-height);
		background: #fff;
	}
	.header {
		height: 88upx;
		display: flex;
		font-size: 36upx;
		justify-content: space-between;
		padding: 0 20upx;
		align-items: center;
		align-content: center;
		.header-left {
			flex: 1;
		}
		.header-title {
			justify-content: center;
			color:#333;
		}
		.header-right {
			justify-content: flex-end;
			flex: 1;
			display: flex;
			align-items: center;
		}
		image {
			width: 100%;
			height: 100%;
		}
	}

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: scroll;
		height: 100%;
		background-color: #efeff4;
	}
	
	.form-group-list {
		margin-top: 20upx;
		.group {
			height: 100upx;
			padding: 0 20upx;
			border-bottom: 1upx solid #efeff4;
			background: #fff;
			font-size: 26upx;
			display: flex;
			align-items: center;
		}
		.input-group {
			.input-label {
				width: 150upx;
				color: #666;
			}
			input {
				color: #333;
				flex: 1;
			}
		}
		.switch-group {
			justify-content: space-between;
		}
		
	}
</style>
