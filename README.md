# supreme_games

## 0831更新
1. 更新所有页面的折扣（-x%），之前是写死的
2. 更新ViewMore以及GamePage的跳转函数jumpViewMore
3. 发现接口getGameInfo会少返回一个游戏名，修改了页面，让所有循环以name的长度为准
4. switchCondition条件修改为0-2，之前错误设置为1-3
5. 增加底栏即将上架的边框，之前因为没有游戏没有设置
6. 搜索游戏的接口新增rank_condition=3，按相关度排序
7. 全新管理员界面

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

"swiper": "^8.3.2"
"vue-awesome-swiper": "^5.0.1"
