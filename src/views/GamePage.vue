<template>
  <div>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Epic Games Store</title>
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/sea_css/index-style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  </head>
    <body id="stop-scroll">
    <game-page-header></game-page-header>
    <!--左上角搜索栏-->
  <div class="search-bar">
    <i class="fas fa-search search-icon-mobile"></i>
    <div class="discover-menu" @click="myFunction()">
      <p>Discover</p>
      <i class="fas fa-chevron-down" id="down"></i>
    </div>
    <div class="search-bar-main">
      <div class="search-div">
        <i class="fas fa-search search-icon-pc"></i>
        <form>
          <input placeholder="搜索" type="text">
        </form>
      </div>
      <ul>
        <li><a href="#">发现</a></li>
        <li><a href="#">个人</a></li>
        <li><a href="#">库</a></li>
      </ul>
    </div>
  </div>
<!--    首页大swiper-->
    <big-swiper></big-swiper>
<!--    正在打折的游戏-->
    <game-sale></game-sale>
<!--    游戏列表-->
    <game-list></game-list>
    </body>
  </div>
</template>


<script>

import GamePageHeader from "@/views/GamePageHeader";
import BigSwiper from "@/views/BigSwiper";
import GameSale from "@/views/GameSale";
import GameList from "@/views/GameList";
export default {

  name: 'stop-scroll',
  components: {
    GameList,
    GameSale,
    BigSwiper,
    GamePageHeader,

  },
  data(){

  },
  mounted() {

  },
  props: {
    msg: String
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
