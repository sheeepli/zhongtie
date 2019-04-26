# 完成日志

[插件库](http://ext.dcloud.net.cn/)
[页面配置](https://uniapp.dcloud.io/collocation/pages)

## 4.25
1. 完成登录页面的静态效果

## 4.26
1. 完成知识库的静态页面效果

### get
1. git pull 失败 ,提示：fatal: refusing to merge unrelated histories
	原因：git认为两个本地库和远程库不相关
	解决方法：
  1. update本地库（emmm暂时不知道怎么update）
  2. git pull origin master --allow-unrelated-histories （强行合并两个库）