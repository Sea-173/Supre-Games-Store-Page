<!--2052535 赵海博-->
<template>
  <div>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>臻Game</title>
      <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="../assets/sea_css/index-style.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    </head>

    <body id="stop-scroll">
    <!--    header-->
    <game-page-header></game-page-header>
    <!--uerinfo-->
    <!--    <user-info style="display: inline-block"></user-info>-->
    <!--左上角页面切换-->

    <vue-particles
        color="#409EFF"
        :particleOpacity="0.7"
        :particlesNumber="50"
        shapeType="star"
        :particleSize="6"
        linesColor="#409EFF"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="100"
        :moveSpeed="1"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse">
    </vue-particles>

    <!--    列表-->
    <div class="swiper third-swipe">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-third">
          <div class="free-text-button">
            <div class="icon-text" style="padding: 5px">
              <h6>游戏管理</h6>
              <div class="search-div">
                <form>
                  <i class="fas fa-search search-icon-pc" style="cursor: pointer" @click="searchGame('searchGameText')"></i>
                  <input id="searchGameText" placeholder="根据游戏名搜索游戏" type="text" autocomplete="off">
                </form>

              </div>
            </div>
          </div>
          <div class="car-tuning" v-for="index in game_name.length" :key="index">
            <div class="container">
              <div class="box" style="border: 2px solid #87CEFA">
                <img :src="require('../../../ExGame-Asset/' + cover[index - 1])" alt="">
                <div class="game-detail">
                  <h6>{{ game_name[index - 1] }}</h6>
                  <p class="game-id">{{ game_list[index - 1] }}</p>
                  <div>
                    <p class="sale-price2">¥{{ price[index - 1] }}</p>
                    <p class="sale-price" @click="deleteGame(game_list[index-1])" style="cursor: pointer">删除</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper-slide swiper-third">
          <div class="free-text-button">
            <div class="icon-text" style="padding: 5px">
              <h6>用户管理</h6>

              <div class="search-div">
                <form>
                  <i class="fas fa-search search-icon-pc" style="cursor: pointer" @click="searchUser()"></i>
                  <input id="searchUserText" placeholder="根据用户名搜索用户" type="text" autocomplete="off" style="width: 130px">
                </form>
              </div>
<!--              <a href="#" style="cursor: pointer" @click="addUserGame(user_id)">添加游戏</a>-->
<!--              <input id="user-game-id" placeholder="游戏id" type="text" autocomplete="off" style="width: 100px">-->
            </div>
          </div>

          <div class="car-tuning" v-for="index in user_name.length" :key="index">
            <div class="container" style="cursor: pointer" @click="jumpGameBase(user_id[index-1])">
              <div class="box" style="border: 2px solid #B0E0E6">
                <img :src="require('../../../ExGame-Asset/' + user_cover[index-1])" alt="" style="position:relative;width: 100px;height: 100px;top: 9%">
                <div class="game-detail">
                  <h6>{{user_name[index-1]}}</h6>
                  <p class="game-id">{{ user_id[index-1]}}</p>
                  <div>
                    <p style="font-size:15px;top: 64%;left: 46%;white-space:nowrap;">游戏数量：{{user_game_num[index-1]}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

<!--          <div class="car-tuning" v-for="index in user_game_name.length" :key="index">-->
<!--            <div class="container">-->
<!--              <div class="box" style="border: 2px solid #87CEFA">-->
<!--                <img :src="require('../../../ExGame-Asset/' + user_game_cover[index - 1])" alt="">-->
<!--                <div class="game-detail">-->
<!--                  <h6>{{ user_game_name[index - 1] }}</h6>-->
<!--                  <p class="game-id">{{user_game_list[index-1]}}</p>-->
<!--                  <div>-->
<!--                  <p class="sale-price" @click="deleteUserGame(user_id, user_game_list[index-1])" style="cursor: pointer">删除</p>-->
<!--                  </div>-->
<!--                  </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

        </div>

        <div class="swiper-slide swiper-third">
          <div class="free-text-button">
            <div class="icon-text" style="padding: 5px">
              <h6>评论管理</h6>
              <div class="search-div">
                <form>
                  <i class="fas fa-search search-icon-pc" style="cursor: pointer" @click="searchComment()"></i>
                  <input id="searchUserComment" placeholder="根据游戏名搜索评论" type="text" autocomplete="off">
                </form>
              </div>
            </div>
          </div>

          <div class="car-tuning">
            <div class="container">
              <div class="box" style="border: 2px solid #87CEFA">
                <img :src="require('../../../ExGame-Asset/' + comment_game_cover[0])" alt="">
                <div class="game-detail">
                  <h6>当前游戏：{{comment_game_name[0]}}</h6>
                  <p class="game-id">{{ comment_game_id[0]}}</p>
                  <div>
                    <p style="font-size:15px;top: 64%;left: 46%;white-space:nowrap;">评论数量：{{comment_num}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="car-tuning" v-for="index in comment_user_name.length" :key="index">
            <div class="container">
              <div class="box" style="border: 2px solid #00BFFF">
                <img :src="require('../../../ExGame-Asset/' + comment_user_head[index - 1])" alt="" style="position:relative;width: 100px;height: 100px;top: 9%">
                <div class="game-detail">
                  <h6 style="top: 10px;left: 46%">{{comment_user_name[index - 1]}}</h6>
                  <p class="game-id" style="top: 30px;left: 46%">{{ comment_user_id[index - 1]}}</p>
                  <div>
                    <p class="sale-price2" style="top: 50px;left: 30%;width: 300px;overflow: auto;height: 100px">{{ comment_content[index - 1] }}</p>
                    <p class="sale-price" @click="deleteComment(comment_game_id[0], comment_user_id[index - 1])" style="cursor: pointer;top: 14px;left: 87%">删除</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--    <div class="swiper-pagination"></div>-->

    </div>

    </body>
  </div>
</template>


<script>

import GamePageHeader from "@/views/GamePageHeader";
import Swiper from 'swiper'; // 注意引入的是Swiper

// import 'swiper/css/swiper.min.css'
// import 'swiper/swiper-bundle.css'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
// import UserInfo from "@/views/UserInfo";

export default {

  name: 'stop-scroll',
  components: {
    // UserInfo,
    GamePageHeader,

  },
  data(){
    return{
      game_id: "",

      // game list
      game_list: [], // 列表1的id
      game_name:[],
      publish_date:[],
      cover:[],
      price:[],
      all_page:0,

      //user information
      user_id:[],
      user_name:[],
      user_cover:[],
      user_game_list:[],
      user_game_num: [],
      user_game_name:[],
      user_game_cover:[],

      //comment information
      comment_game_id:[],
      comment_game_cover:[],
      comment_game_name:[],
      comment_game_price:[],
      comment_user_head:[],
      comment_user_id:[],
      comment_user_name:[],
      comment_date:[],
      comment_content:[],
      comment_num:0,


      praise: [], // 列表3的id
      praise_game_name:[],
      praise_cover:[],
      praise_price:[],


    }
  },
  mounted:function() {
    new Swiper('.swiper-container', {
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true,//修改swiper的父元素时，自动初始化swiper
      autoplay: true,
      loop: false,
      spaceBetween: 30,
      // 其他配置...
    })
  },
  props: {
    msg: String
  },
  methods:{
    // 跳转到库页面
    jumpGameBase(user_id){
      console.log('跳转到' + user_id +'的库页面');
      this.$router.push({name:'AdministratorGameBase', query: {userID:user_id}});
    },

    // 删除数据库里的一个游戏
    async deleteGame(game_id){
      console.log("删除游戏：" + game_id);
      let self = this;
      await self.$axios({
        method:'post',
        url: 'api/deleteGame',
        data: {
          game_id:game_id
        }
      })
          .then(res=>{
            switch (res.data.result){
              case 0:
                alert("删除失败");
                break;
              case -1:
                alert("deletegame数据库连接失败");
                break;
              case 1:
                alert(game_id+"号游戏删除成功");

                this.game_list = []; // 列表1的id
                this.game_name = [];
                this.publish_date = [];
                this.cover = [];
                this.price = [];
                this.all_page = 0;

                this.getGameRank("new", 5, this.game_list, this.game_name, this.price, this.cover);

                break;
            }
          })
    },

    // 为一个用户增加一个游戏
    async addUserGame(user_id){
      let game_id = document.getElementById('user-game-id').value;
      console.log("为用户" + user_id + "增加游戏" + game_id);
      let self = this;
      await self.$axios({
        method:'post',
        url: 'api/user/addUserGame',
        data: {
          user_id:user_id,
          game_id:game_id
        }
      })
          .then(res=>{
            switch (res.data.result){
              case 0:
                alert("为用户" + user_id + "增加游戏" + game_id + "失败");
                break;
              case -1:
                alert("为用户" + user_id + "增加游戏" + game_id +"数据库连接失败");
                break;
              case 1:
                alert("为用户" + user_id + "增加游戏" + game_id + "成功");
                this.user_game_num = 0;
                this.user_game_list=[];
                this.user_game_name=[];
                this.user_game_cover=[];

                this.getUserGameInfo(user_id);

                break;
            }
          })
    },

    // 删除一个用户库里的一个游戏
    async deleteUserGame(user_id,game_id){
      console.log("为用户" + user_id + "删除游戏" + game_id);
      let self = this;
      await self.$axios({
        method:'post',
        url: 'api/user/deleteUserGame',
        data: {
          user_id:user_id,
          game_id:game_id
        }
      })
          .then(res=>{
            switch (res.data.result){
              case 0:
                alert("为用户" + user_id + "删除游戏" + game_id + "失败");
                break;
              case -1:
                alert("为用户" + user_id + "删除游戏" + game_id +"数据库连接失败");
                break;
              case 1:
                alert("为用户" + user_id + "删除游戏" + game_id + "成功");
                this.user_game_num = 0;
                this.user_game_list=[];
                this.user_game_name=[];
                this.user_game_cover=[];
                this.getUserGameInfo(user_id);

                break;
            }
          })
    },

    // 根据用户id获取用户姓名和cover
    async getUserInfo(user_id){
      console.log("获取用户" + user_id + "个人信息");
      let self = this;
      await self.$axios({
        method:'post',
        url: 'api/user/getUserInfo',
        data: {
          id:user_id
        }
      })
          .then(res=>{
            switch (res.data.result){
              case 0:
                alert("获取用户" + user_id + "个人信息" + "失败");
                break;
              case -1:
                alert("获取用户" + user_id + "个人信息" +"数据库连接失败");
                break;
              case 1:
                self.user_name.push(res.data.name);
                self.user_game_num.push(res.data.game_num);
                break;
            }
          })
    },

    // 获取一个用户的游戏信息
    async getUserGameInfo(user_id){
      console.log("获取用户" + user_id + "游戏信息");
      let self = this;
      let i;
      await self.$axios({
        method:'post',
        url: 'api/user/getUserGameInfo',
        data: {
          id:user_id
        }
      })
          .then(res=>{
            switch (res.data.result){
              case 0:
                alert("获取用户" + user_id + "游戏信息" + "失败");
                break;
              case -1:
                alert("获取用户" + user_id + "游戏信息" +"数据库连接失败");
                break;
              case 1:
                // alert("获取用户" + user_id + "游戏信息" + "成功");

                self.user_game_num = res.data.game_num;

                for(i in res.data.game_info_set){
                  self.user_game_list.push(res.data.game_info_set[i].game_id);
                  self.user_game_name.push(res.data.game_info_set[i].game_name);
                  self.user_game_cover.push('Game/' + res.data.game_info_set[i].game_id + '/Cover/anCover.jpg')
                }
                break;
            }
          })
    },

    // 根据用户名获取用户id并获取该用户的游戏信息
    async getUserId(user_name){
      console.log("获取用户" + user_name + "id");
      let self = this;
      await self.$axios({
        method:'post',
        url: 'api/user/getUserId',
        data: {
          user_name:user_name
        }
      })
          .then(res=>{
            switch (res.data.result){
              case 0:
                alert("获取用户" + user_name + "id" + "失败");
                break;
              case -1:
                alert("获取用户" + user_name + "id" +"数据库连接失败");
                break;
              case 1:
                // alert("获取用户" + user_id + "id" + "成功");
                this.user_id = res.data.user_id;
                break;
            }
          })
    },

    //根据游戏id和用户id删除用户评论
    async deleteComment(game_id, user_id){
      console.log("删除用户" + user_id + "的" + game_id + "号游戏的评论");
      let self = this;
      await self.$axios({
        method:'post',
        url: 'api/gamedetail/deleteComment',
        data: {
          game_id:game_id,
          user_id:user_id
        }
      })
          .then(res=>{

            switch (res.data.result){
              case 0:
                alert("删除用户" + user_id + "的" + game_id + "号游戏的评论" + "失败");
                break;
              case -1:
                alert("删除用户" + user_id + "的" + game_id + "号游戏的评论" +"数据库连接失败");
                break;
              case 1:
                alert("删除用户" + user_id + "的" + game_id + "号游戏的评论" + "成功");
                // this.user_id = res.data.user_id;
                // this.getUserGameInfo(this.user_id);
                this.comment_num=0;
                this.comment_user_id=[];
                this.comment_user_name=[];
                this.comment_content=[];
                this.comment_date=[];
                this.comment_user_head=[];
                this.getComment(game_id);
                break;
            }
          })
    },

    //获取特定游戏的评论信息
    async getComment(game_id) {
      let pgn = 1;
      let type = 2;
      let f1 = 0;
      let f2 = 0;
      let f3 = 0;
      let user_id = '0000000001';

      if (game_id.length === 0) {
        alert('gid 不能为空')
        return;
      }
      if (user_id.length === 0) {
        alert('uid 不能为空')
        return;
      }

      this.$axios.post('api/gamedetail/getGameComments', {
        game_id: game_id,
        user_id: user_id,
        page_no: pgn,
        comment_type: type,
        filter_1: f1,
        filter_2: f2,
        filter_3: f3,
      }).then(res => {
        if (res.data.result === 0){
          console.log(res.data.result);
          alert("该游戏没有评论");
          return;
        }

        if (res.data.result === -1){
          alert("数据库端出现问题，请联系管理人员");
          return;
        }
        console.log('本次获取 ' + res.data.comment_num.toString() + " 条评论");
        console.log(res.data.comment_list)
        this.comment_num = res.data.comment_num;

        for (let i in res.data.comment_list) {
          console.log('comment -----' + res.data.comment_list[i].id);
          console.log(res.data.comment_list[i].name);
          this.comment_user_id.push(res.data.comment_list[i].id);
          this.comment_user_name.push(res.data.comment_list[i].name);
          this.comment_content.push(res.data.comment_list[i].content);
          this.comment_date.push(res.data.comment_list[i].date);
          this.comment_user_head.push('User/' + res.data.comment_list[i].id + '/ProfilePhoto.jpg')

        }
      }).catch(err => {
        console.log(err);
      })
    },

    // 搜索游戏名并更新游戏列表
    async searchGame(p_id){
      let game_name = document.getElementById(p_id).value;
      if (game_name===''){
        alert("请输入内容");
        return;
      }
      // alert(game_name)
      this.game_list = [];
      this.game_name = [];
      this.price = [];
      this.publish_date = [];

      await this.searchGameList(game_name, this.game_list);
      if (this.game_list == null)
        return;

      alert(this.game_list)
      await this.getGameInfo(this.game_list)
      alert(this.game_name)
      alert(this.price)
      alert('结束')

      let i;
      this.cover=[];
      for(i of this.game_list){
        this.cover.push('Game/' + i + '/Cover/anCover.jpg');
      }
    },

    // 根据游戏名搜索游戏，只更新id list
    async searchGameList(name, id_list){

      let game_or_publisher = 0;
      let is_on_sale = 0;
      let is_dlc = 0;
      let rank_condition = 3;
      let search_page = 1;

      const self = this;
      await self.$axios({
        method:'post',
        url: 'api/library/GetQueryNameList',
        data: {
          name:name,
          game_or_publisher:game_or_publisher,
          is_on_sale:is_on_sale,
          is_DLC:is_dlc,
          rank_condition:rank_condition,
          page:search_page
        }
      })
          .then(res=>{
            console.log(res.data.result)
            let i;
            switch (res.data.result){
              case 0:
                alert("查询不到该游戏");
                break;
              case -1:
                alert("searchGame数据库连接失败");
                break;
              case 1:
                for(i in res.data.id_list)
                {
                  console.log('search get   ' + res.data.id_list[i]);
                  id_list.push(res.data.id_list[i]);
                }

                this.all_page = res.data.all_page;

                break;
            }
          })
    },

    // 根据id获取游戏名和价格
    getGameInfo(game_id) {
      const self = this;
      let i;
      self.$axios({
        method: 'post',
        url: 'api/getGameInfo',
        data: {
          game_id: game_id
        }
      })
          .then(res => {
            switch (res.data.result) {
              case 0:
                console.log(res.data.result);
                alert("获取不到游戏信息");
                break;
              case -1:
                alert("search数据库端出现问题，请联系管理人员");
                break;
              case -2:
                alert("数据库出现问题");
                break;
              case 1:
                for (i in res.data.game_name) {
                  console.log('search get  ' + res.data.game_name[i])
                  this.game_name.push(res.data.game_name[i]);
                  // alert(game_name)
                }

                for (i in res.data.price) {
                  console.log('search get  ' + res.data.price[i])
                  this.price.push(res.data.price[i]);
                }

                break;

            }
          })
          .catch(err => {
            console.log(err);
          })
    },

    // 根据用户名搜索用户
    async searchUser(){
      let user_name = document.getElementById('searchUserText').value;
      if (user_name===''){
        alert("请输入内容");
        return;
      }
      // alert(user_name);
      await this.getUserId(user_name);
      this.user_game_list = [];
      this.user_game_name = [];
      this.user_game_cover = [];
      this.user_game_num=0;
      await this.getUserInfo(this.user_id);
      await this.getUserGameInfo(this.user_id);
    },

    // 根据游戏名搜索评论
    async searchComment(){
      let game_name = document.getElementById('searchUserComment').value;
      if (game_name===''){
        alert("请输入内容");
        return;
      }
      let game_ids = [];
      await this.searchGameList(game_name, game_ids);
      if (game_ids.length===0)
        return;
      alert(game_ids[0])
      let game_id = game_ids[0];
      await this.getComment(game_id);
    },

    //game list
    async getGameRank(rankname, number=4, ranklist, game_name, price, cover){
      const self = this;
      await self.$axios({
        method:'post',
        url: 'api/library/GetGameRank',
        data: {
          rank_name: rankname,
          number: number
        }
      })
          .then(res=>{
            let i;
            switch (res.data.result){
              case 0:
                console.log(rankname + number + "申请失败")
                alert(rankname + "申请数据失败");
                break;
              case 1:
                for(i in res.data.id_list)
                {
                  console.log('get   ' + res.data.id_list[i])
                  ranklist.push(res.data.id_list[i]) ;
                }
                break;
            }
          })

      if( ranklist == null)
        return;

      this.getGameListInfo(ranklist, game_name, price);
      let i;
      for(i of ranklist){
        cover.push('Game/' + i + '/Cover/anCover.jpg');
      }
    },
    getGameListInfo(game_id, game_name, price){
      const self = this;
      let i;
      self.$axios({
        method:'post',
        url: 'api/getGameInfo',
        data: {
          game_id: game_id
        }
      })
          .then(res=>{
            switch (res.data.result){
              case 0:
                alert("GameList申请数据失败");
                break;
              case -1:
                alert("GameList数据库端出现问题，请联系管理人员");
                break;
              case -2:
                alert("数据库出现问题");
                break;
              case 1:
                for(i in res.data.game_name)
                {
                  console.log('gamelist get' + res.data.game_name[i])
                  game_name.push(res.data.game_name[i]) ;
                }

                for(i in res.data.price)
                {
                  console.log('gamelist get' + res.data.price[i])
                  price.push(res.data.price[i]) ;
                }

                break;

            }
          })
          .catch( err=>{
            console.log(err);
          })
    }

  },
  async created() {

    // game list取数据
    this.getGameRank("new", 6, this.game_list, this.game_name, this.price, this.cover);

    // 获取一个用户信息
    for (let i = 4 ; i <= 8; i++){
      let userid = '000000000' + i.toString();
      this.user_id.push(userid);
      await this.getUserInfo(userid);
      this.user_cover.push('User/' + userid + '/ProfilePhoto.jpg');
    }


    // 获取一个游戏的评论信息
    this.comment_game_id.push('0000000002');
    this.getComment(this.comment_game_id[0]);
    this.getGameListInfo(this.comment_game_id, this.comment_game_name, this.comment_game_price);

    this.comment_game_cover.push('Game/' + this.comment_game_id[0] + '/Cover/anCover.jpg');

    // this.getGameRank("praise", 5, this.praise, this.praise_game_name, this.praise_price, this.praise_cover);


  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/sea_css/index-style.css";
@import "../assets/sea_css/mixins.css";
@import "../assets/sea_css/cards.css";
@import "../assets/sea_css/variables.css";
#particles-js {
  width: 100%;
  height: calc(320% - 100px);
  position: absolute;
}


</style>
