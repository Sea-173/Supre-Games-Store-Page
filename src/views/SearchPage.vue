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
  <game-page-header></game-page-header>
  <search-bar></search-bar>

  <div class="swiper third-swipe" >
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-third" >
        <div class="free-text-button">
          <div class="icon-text">
            <h6>筛选</h6>
            <ul>
              <li><a href="#">DLC</a></li>
            </ul>
            <ul>
              <li><a href="#">折扣</a></li>
            </ul>
            <ul>
              <li><a href="#">balabala</a></li>
            </ul>

          </div>
          <a href="#">查看更多</a>
        </div>
        <div class="car-tuning" v-for="index in later.length" :key="index">
          <img :src="require('../assets/sea_image' + later_cover[index - 1])" alt="">
          <div class="game-detail">
            <h6>{{ later_game_name[index - 1] }}</h6>
            <p class="new-epic-button">新品</p>
            <div>
              <p class="p-sale-button">-20%</p>
              <p class="sale-price">{{ later_price[index - 1] }}</p>
              <p>{{ later_price[index - 1] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <buttom-list></buttom-list>
  </body>
  </div>
</template>

<script>
import Swiper from "swiper";
import GamePageHeader from "@/views/GamePageHeader";
import ButtomList from "@/views/ButtomLsit";
import SearchBar from "@/views/SearchBar";

export default {
  name: "SearchPage",
  components: {SearchBar, ButtomList, GamePageHeader},
  mounted() {
    new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      // 其他配置...
    })
  },
  data() {
    return {
      later:[],
      later_game_name:[],
      later_cover:[],
      later_price:[]
    }
  },
  created(){
    // this.getGameRank("later", 5, this.later);
    //
    // for(let i of this.later) {
    //   this.getGameInfo(i, this.later_game_name, this.later_price, this.later_cover)
    // }

    this.later.push("0000000001");
    this.later_game_name.push("res.data.later_game_name");
    this.later_price.push("res.data.later_price");
    this.later_cover.push("/kena.jpg");

    this.later.push("0000000002");
    this.later_game_name.push("res.data.later_game_name");
    this.later_price.push("res.data.later_price");
    this.later_cover.push("/c2077.jpeg");

  },
  methods:{
    getGameRank(rankname, number=5, ranklist){
      const self = this;
      let a = rankname + "排行榜";
      self.$axios({
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
                alert("排行榜申请数据失败");
                break;
              case 1:
                a = a + "加载成功";
                for(i in res.data.id_list)
                {
                  console.log('get   ' + res.data.id_list[i])
                  ranklist.push(res.data.id_list[i]) ;
                }
                break;
            }
          })
    },
    getGameInfo(game_id, game_name, price, cover){
      const self = this;
      let a = "轮播图";
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
                alert(game_id.toString() + "申请数据失败");
                break;
              case -1:
                alert("game_id.toString()" + "数据库端出现问题，请联系管理人员");
                break;
              case 1:
                a = a + game_id.toString() + "加载成功";
                game_name.push(res.data.game_name);
                price.push(res.data.price);
                cover.push(res.data.cover);
                break;
            }
          })
          .catch( err=>{
            console.log(err);
          })
    }
  }
}
</script>

<style scoped>

</style>
