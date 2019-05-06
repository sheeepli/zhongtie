<template>
	<view class="wrap">
		<view class="status-bar">
		</view>
		<view class="content">
			<!-- <view class="loginBg"> -->
				<image class="loginBg" src="../../static/img/loginBg.png"></image>
			<!-- </view> -->
			<view class="input-group">
				<view class="input-row">
					<image src="../../static/img/user.png" mode=""></image>
					<m-input class="m-input" type="text" clearable v-model="account" placeholder=" 请输入用户名称"></m-input>
				</view>
				<view class="input-row">
					<image src="../../static/img/password.png" mode=""></image>
					<m-input type="password" displayable v-model="password" placeholder=" 请输入用户密码"></m-input>
				</view>
			</view>
			<view class="signAndForget">
				<view @tap="toPage('reg')">
					立即注册
				</view>
				<view @tap="toPage('forget')">
					忘记密码?
				</view>
			</view>
			<button type="primary" class="loginBtn" @tap="bindLogin" :disabled="disabled">login</button>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	import mInput from '../../components/m-input.vue'

	export default {
		components: {
			mInput
		},
		data() {
			return {
				account: '',
				password: '',
				disabled: false
			}
		},
		methods: {
			bindLogin() {
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				this.disabled = true
				console.log(`${this.account}, ${this.password}`)
				uni.request({
					url: `http://192.168.2.168:7089/default/@zopen.papi:login`,
					data: {
						username: this.account,
						password: this.password,
						redirectUrl: 'http://192.168.2.168:7089/__cache__/workonline/201901081526/mobile/knowledgeProject/htmls/bootPage/login.html'
					},
					method: 'GET',
					header: {
						'content-type': 'application/json'
					},
					complete: (res) => {
						this.disabled = false
						if (res.data.code != 0) {
							uni.showToast({
								icon: 'none',
								title: `登录失败，${res.data.message}`,
							})
							return
						}
						console.log("res: " + JSON.stringify(res));
						uni.setStorageSync('account', this.account)
						this.toMain()
					},
					fail: (err) => {
						console.log(JSON.stringify(err))
					}
				})
			},
			toMain() {
				uni.reLaunch({
					url: '../main/main',
				});
			},
			toPage(pageName) {
				uni.navigateTo({
					url: `/pages/${pageName}/${pageName}`
				})
			},
		},
	  onReady() {}
	}
</script>

<style>
	.status-bar {
		background: #2a80fc;
	}

	.loginBg {
		display: block;
		 /* width: 750upx; */
		 width: 100%;
		height: 641upx;
	}

	.input-group {
		padding-top: 33upx;
	}

	.input-row {
		width: 500upx;
		height: 75upx;
		border: 1upx solid #999;
		border-radius: 10upx;
		padding-left: 10upx;
		margin: 17upx auto;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.input-row input {
		font-size: 32upx;
		height: 50upx;
	}

	.input-row image {
		height: 37upx;
		width: 31upx;
		margin: 0 10upx
	}

	.signAndForget {
		margin: 0 auto;
		padding: 0;
		width: 500upx;
		font-size: 26upx;
		display: flex;
		justify-content: space-between;
		color: #00d2f1;
	}

	.loginBtn {
		width: 500upx;
		height: 92upx;
		background: #00D2F1;
		margin-top: 135upx;
		color: #fff;
		border-color: #00D2F1;
	}
</style>
