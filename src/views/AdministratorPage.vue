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


    <!--    列表-->
    <div class="swiper third-swipe">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-third">
          <div class="free-text-button">
            <div class="icon-text">
              <h6>游戏管理</h6>
              <div class="search-div">
                <form>
                  <i class="fas fa-search search-icon-pc" style="cursor: pointer" @click="searchGame()"></i>
                  <input id="searchGameText" placeholder="根据游戏名搜索游戏" type="text" autocomplete="off">
                </form>
              </div>
            </div>
            <a href="#">查看更多</a>
          </div>
          <div class="car-tuning" v-for="index in game_list.length" :key="index">
            <div class="container">
              <div class="box">
                <img :src="require('../../../ExGame-Asset/Game/' + cover[index - 1])" alt="">
                <!--          {{cover[index - 1]}}-->
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
            <div class="icon-text">
              <h6>用户管理</h6>
              <div class="search-div">
                <form>
                  <i class="fas fa-search search-icon-pc" style="cursor: pointer" @click="searchUser()"></i>
                  <input id="searchUserText" placeholder="根据用户名搜索用户" type="text" autocomplete="off">
                </form>
              </div>
            </div>
            <a href="#">查看更多</a>
          </div>
          <div class="car-tuning" v-for="index in hotsale.length" :key="index">
            <div class="container">
              <div class="box">
                <img :src="require('../../../ExGame-Asset/Game/' + hot_cover[index - 1])" alt="">
                <div class="game-detail">
                  <h6>{{ hot_game_name[index - 1] }}</h6>
                  <div>
                    <p class="sale-price2">¥{{ hot_price[index - 1] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-third">
          <div class="free-text-button">
            <div class="icon-text">
              <h6>评论管理</h6>
              <div class="search-div">
                <form>
                  <i class="fas fa-search search-icon-pc" style="cursor: pointer" @click="searchComment()"></i>
                  <input id="searchUserComment" placeholder="根据游戏名搜索评论" type="text" autocomplete="off">
                </form>
              </div>
            </div>
            <a href="#">查看更多</a>
          </div>
          <div class="car-tuning" v-for="index in praise.length" :key="index">
            <div class="container">
              <div class="box">
                <img :src="require('../../../ExGame-Asset/Game/' + praise_cover[index - 1])" alt="">
                <div class="game-detail">
                  <h6>{{praise_game_name[index - 1]}}</h6>
                  <div>
                    <p class="sale-price2">¥{{ praise_price[index - 1] }}</p>
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

      hotsale: [], // 列表2的id
      hot_game_name:[],
      hot_cover:[],
      hot_price:[],
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
    // eslint-disable-next-line no-unused-vars
    deleteGame(game_id){
        alert(game_id);
    },

    async searchGame(){
      let game_name = document.getElementById('searchGameText').value;
      alert(game_name);

      while(this.game_list.length>0) {
        await this.game_list.pop()
      }

      await this.searchGameList(game_name);
    },

    async searchGameList(name){

      let game_or_publisher = 0;
      let is_on_sale = 0;
      let is_dlc = 0;
      let rank_condition = 0;
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
                  this.game_list.push(res.data.id_list[i]);
                }
                this.all_page = res.data.all_page;
                break;
            }
          })
      if (this.game_list == null)
        return;

      this.getGameInfo(this.game_list, this.game_name, this.price)
      let i;
      for(i of this.game_list){
        this.cover.push(i + '/Cover/ancover.jpg');
      }
    },

    getGameInfo(game_id, game_name, price) {
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
                alert("搜索不到游戏");
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
                  game_name.push(res.data.game_name[i]);
                }

                for (i in res.data.price) {
                  console.log('search get  ' + res.data.price[i])
                  price.push(res.data.price[i]);
                }

                break;

            }
          })
          .catch(err => {
            console.log(err);
          })
    },

    async searchUser(){
      let user_name = document.getElementById('searchUserText').value;
      alert(user_name);
    },

    async searchComment(){
      let user_name = document.getElementById('searchUserComment').value;
      alert(user_name);
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
        cover.push(i + '/Cover/ancover.jpg');
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
                console.log(res.data.result);
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
                  console.log('get   ' + res.data.game_name[i])
                  game_name.push(res.data.game_name[i]) ;
                }

                for(i in res.data.price)
                {
                  console.log('get   ' + res.data.price[i])
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
  created() {

    // game list取数据
    this.getGameRank("hot", 5, this.hotsale, this.hot_game_name, this.hot_price, this.hot_cover);
    this.getGameRank("new", 5, this.game_list, this.game_name, this.price, this.cover);
    this.getGameRank("praise", 5, this.praise, this.praise_game_name, this.praise_price, this.praise_cover);


  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/sea_css/index-style.css";
@import "../assets/sea_css/mixins.css";
@import "../assets/sea_css/cards.css";
@import "../assets/sea_css/variables.css";




</style>
