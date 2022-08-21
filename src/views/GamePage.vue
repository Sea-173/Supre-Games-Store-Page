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
    <game-page-header></game-page-header>
    <search-bar></search-bar>
<!--    首页大swiper-->
    <big-swiper></big-swiper>
<!--    正在打折的游戏-->
    <game-sale></game-sale>
<!--    游戏列表-->
    <game-list></game-list>
<!--    底栏-->
    <buttom-list></buttom-list>
    </body>
  </div>
</template>


<script>

import GamePageHeader from "@/views/GamePageHeader";
import BigSwiper from "@/views/BigSwiper";
import GameSale from "@/views/GameSale";
import GameList from "@/views/GameList";
import ButtomList from "@/views/ButtomLsit";
import SearchBar from "@/views/SearchBar";
export default {

  name: 'stop-scroll',
  components: {
    SearchBar,
    ButtomList,
    GameList,
    GameSale,
    BigSwiper,
    GamePageHeader,

  },
  data(){
    return{
      game_id: ""
    }
  },
  mounted() {

  },
  props: {
    msg: String
  },
  methods:{
    search(){
      let a = document.getElementById("searchtext").value;
      alert(a);
      console.log(a);
      this.$router.push({name:'search_result', params: {name: a}})
    }
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
