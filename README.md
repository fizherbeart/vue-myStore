# vue-my-store

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 基本用户信息

管理员: username: 'admin',password: '123',

卖家: username: 'user2',password: '123',

买家: username: 'user1',password: '123',

## 新框架说明
所有vue组件都在`views`文件中。
为三种用户分别设置权限等级(1-3, 3为管理员,等级最高),存储在在vuex中的`userLevel`变量内,方便所有组件进行访问.
这样通过权限区分, 买家,卖家,管理员就可以公用同一个布局，在`views/layout`下面
- 买家可以 查看商品
- 卖家可以 查看商品,管理商品
- 管理员可以 查看商品,管理商品,管理人员
- 也就是说权限等级越高, 功能越多(除了添加购物车功能, 该功能只给买家提供)
## Todo List

- [ ] 商品管理界面的搜索框
- [ ] 删除不必要的元素，界面美化啥的

等待后端接口

- [ ] 注册: 增加用户的功能
- [ ] 显示库存
- [ ] 卖家和管理员 增删改查商品（拟用ajax）
- [ ] 管理员 增删改查 管理用户


---

- [x] 通过关键字搜索商品搜索框
- [x] 页面切换：例如购物车切换到商品页面





For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
