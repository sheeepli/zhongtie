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

## 统一命名
1. class 命名规范
	1. 最外层使用 `wrap`
	2. 除了自带的样式外，`wrap` 下直接包含 `header`, `content`, `footer`
	3. 列表容器使用 `**List`, 若该列表存在标题，则该标题使用 `**ListTitle`
	4. 列表单个元素使用 `**Item`
	5. 元素上中下分层（与点6可混合使用）
		* 上 `itemHeader`
		* 中 `itemContent`
			+ 内部如果左右分栏，则同点6
		* 下 `itemFooter`
	6. 元素左右分栏（左图右字 / 左字右图）
		* `itemImg`
		* `itemMain`
		* `itemTitle`
		* `itemText`