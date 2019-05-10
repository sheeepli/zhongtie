# 完成日志

[插件库](http://ext.dcloud.net.cn/)
[页面配置](https://uniapp.dcloud.io/collocation/pages)

## 4.25
1. 完成登录页面的静态效果

## 4.27
1. 完成知识库的静态页面效果

### get
1. git pull 失败 ,提示：fatal: refusing to merge unrelated histories
	原因：git认为两个本地库和远程库不相关
	解决方法：
	1. update本地库（emmm暂时不知道怎么update）
	2. git pull origin master --allow-unrelated-histories （强行合并两个库）

## 4.28
1. 编辑libDetail页面（未完成）如果可以，滑动功能自己下（现暂时使用插件，非设计稿效果）

## 4.29
1. 测试效果：在app.vue上添加全局样式，对整个app使用粘性底部布局（已完成）
2. 思考：如何在标题居中的情况下，左右可有无按钮

## 4.30
1. 关于昨天的标题居中，确实做到了，但是左右必须有两个空元素，关于这个问题，等项目做完了思考一下
2. 完成了搜索页面
3. libDetail页面修改了侧拉框
4. 思考：侧拉框数据怎么写
**明天放假了，开心**

## 5.5
**不开心，上班了**
1. 关于 4.30 的思考，数据是写完了，就是有点繁琐，能不能用更好的方法解决，不用那么多次forEach呢？

## 5.6
### 完成页面
1. 用户中心页面（除设置页面外，其他页面都没有建立）
2. 设置页面（没有建立消息提醒页面）

### 明天的事情
1. 尽量写完用户中心里面的页面
2. 整理通用头部样式（特别是图标的跳转是要用 `<navigator></navigator>` 还是使用 `uni.navigatorTo()`，请决定）

### 想法
1. 关于 `class类名` 用 `-` 链接两个单词
2. js `变量` 使用 `小驼峰`
3. js `构造方法` 使用 `大驼峰`
**以后写代码的时候要时刻想到这个**

## 5.7
**骂人可以嘛，玩了一早上游戏，看了一下午手机，你想干嘛？？？**
### 完成页面
1. 资料管理页面

### 明天的事情
1. 将昨天的事情做完。。。

## 5.8
### 完成页面
1. 下载（downloads）页面
2. 消息（messages）页面
3. 提醒设置（reminder）页面

### 未完成
1. 用户主页（与专家库一起写）
2. 资源、关注、分享、收藏（同一类型）
3. 评价（可做）


## 规范
* class 命名规范
  1. 最外层使用 `wrap`
  2. 除了自带的样式外，`wrap` 下直接包含 `header`, `content`, `footer`
  3. 列表容器使用 `**List`, 若该列表存在标题，则该标题使用 `**ListTitle`
  4. 列表单个元素使用 `**Item`
  5. 元素上中下分层（与点6可混合使用）
    * 上 `item-header`
    * 中 `item-content`
      + 内部如果左右分栏，则同点6
    * 下 `item-footer`
  6. 元素左右分栏（左图右字 / 左字右图）
    * `item-img`
    * `item-main`
    * `item-title`
    * `item-text`
		``` html
			<!-- 大致代码 -->
			<view class="wrap">
				<view class="status-bar"></view>
				<view class="header">
					<view class="header-left"></view>
					<view class="header-title"></view>
					<view class="header-right"></view>
				</view>
				<view class="content">
					<view class="list">
						<view class="list-title"></view>
						<view class="item">
							<view class="item-img"></view>
							<view class="item-main">
								<view class="item-title"></view>
								<view class="item-text"></view>
							</view>
						</view>
					</view>
				</view>
				<view class="footer"></view>
			</view>
		```
	7. 组（group）的存在
		输入框组
		左边为150upx，右边占满（flex: 1）；
		左边颜色为#666，26upx，右边#333，26upx；
		``` html
			<view class="form-group-list">
				<view class="form-group">
					<view class="input-label"></view>
					<input type="text">
				</view>
			</view>
		```
		
* 样式统一
  1. 通用格式写在app.vue页面中
  2. 关于顶部的样式
    1. 标题字体大小为 36upx
		2. 左右图标宽高都为 44upx（应该没什么问题）

## 优化
* 关于app.vue页面的css有点乱，可以整理好之后提交到blog上，以后方便使用(。・∀・)ノ
* 