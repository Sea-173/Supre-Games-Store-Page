<!--赵海博 游戏排行榜-->
<template>
  <div class="swiper third-swipe">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-third">
        <div class="free-text-button">
          <div class="icon-text">
            <h6>新品榜</h6>
          </div>
          <a href="#">查看更多</a>
        </div>
        <div class="car-tuning" v-for="index in newrelease.length" :key="index">
<!--          <img :src="require('../../../ExGame-Asset/Game/' + new_cover[index - 1])" alt="">-->
          {{new_cover[index - 1]}}
          <div class="game-detail">
            <h6>{{ new_game_name[index - 1] }}</h6>
            <p class="new-epic-button">新品</p>
            <div>
              <p class="p-sale-button">-20%</p>
              <p class="sale-price">{{ new_price[index - 1] }}</p>
              <p>{{ new_price[index - 1] }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide swiper-third">
        <div class="free-text-button">
          <div class="icon-text">
            <h6>热销榜</h6>
          </div>
          <a href="#">查看更多</a>
        </div>
        <div class="car-tuning" v-for="index in hotsale.length" :key="index">
<!--          <img :src="require('../../../ExGame-Asset/Game/' + hot_cover[index - 1])" alt="">-->
          <div class="game-detail">
            <h6>{{ hot_game_name[index - 1] }}</h6>
            <div>
              <p>{{ hot_price[index - 1] }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide swiper-third">
        <div class="free-text-button">
          <div class="icon-text">
            <h6>好评榜</h6>
          </div>
          <a href="#">查看更多</a>
        </div>
        <div class="car-tuning" v-for="index in praise.length" :key="index">
<!--          <img :src="require('../../../ExGame-Asset/Game/' + praise_cover[index - 1])" alt="">-->
          <div class="game-detail">
            <h6>{{praise_game_name[index - 1]}}</h6>
            <div>
              <p>{{ praise_price[index - 1] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

<!--    <div class="swiper-pagination"></div>-->

  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "GameList",
  mounted() {
    new Swiper('.swiper-container', {
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true,//修改swiper的父元素时，自动初始化swiper
      autoplay: true,
      loop: true,
      // 其他配置...
    })
  },
  data() {
    return {
      newrelease: [], // 列表1的id
      new_game_name:[],
      new_cover:[],
      new_price:[],
      hotsale: [], // 列表2的id
      hot_game_name:[],
      hot_cover:[],
      hot_price:[],
      praise: [], // 列表3的id
      praise_game_name:[],
      praise_cover:[],
      praise_price:[],
      recommend:[],
      recommend_game_name:[],
      recommend_cover:[],
      recommend_price:[],
      later:[],
      later_game_name:[],
      later_cover:[],
      later_price:[]
    }
  },
  created(){
    this.getGameRank("hot", 5, this.hotsale, this.hot_game_name, this.hot_price, this.hot_cover);
    this.getGameRank("new", 5, this.newrelease, this.new_game_name, this.new_price, this.new_cover);
    this.getGameRank("praise", 5, this.praise, this.praise_game_name, this.praise_price, this.praise_cover);

    // this.getGameInfo(this.hotsale, this.hot_game_name, this.hot_price, this.hot_cover);
    // this.getGameInfo(this.newrelease, this.new_game_name, this.new_price, this.new_cover);
    // this.getGameInfo(this.praise, this.praise_game_name, this.praise_price, this.praise_cover)

    // this.hotsale.push("0000000001");
    // this.hot_game_name.push("res.data.hot_game_name");
    // this.hot_price.push("res.data.hot_price");
    // this.hot_cover.push("/kena.jpg");
    //
    // this.newrelease.push("0000000001");
    // this.new_game_name.push("res.data.new_game_name");
    // this.new_price.push("res.data.new_price");
    // this.new_cover.push("/kena.jpg");
    //
    // this.praise.push("0000000001");
    // this.praise_game_name.push("res.data.praise_game_name");
    // this.praise_price.push("res.data.praise_price");
    // this.praise_cover.push("/kena.jpg");


    // this.hotsale.push("0000000002");
    // this.hot_game_name.push("res.data.hot_game_name");
    // this.hot_price.push("res.data.hot_price");
    // this.hot_cover.push("/c2077.jpeg");
    //
    // this.newrelease.push("0000000002");
    // this.new_game_name.push("res.data.new_game_name");
    // this.new_price.push("res.data.new_price");
    // this.new_cover.push("/c2077.jpeg");
    //
    // this.praise.push("0000000002");
    // this.praise_game_name.push("res.data.praise_game_name");
    // this.praise_price.push("res.data.praise_price");
    // this.praise_cover.push("/c2077.jpeg");

  },
  methods:{
    async getGameRank(rankname, number=5, ranklist, game_name, price, cover){
      const self = this;
      let a = rankname + "排行榜";
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
                alert("GameList申请数据失败");
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

      if( ranklist == null)
        return;

      this.getGameInfo(ranklist, game_name, price);
      let i;
      for(i of ranklist){
        cover.push(i + '/Cover/ancover.jpg');
      }
    },
    getGameInfo(game_id, game_name, price){
      const self = this;
      let a = "轮播图";
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
                a = a + game_id.toString() + "加载成功";

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
  }
}


</script>

<style scoped>
@import "../assets/sea_css/index-style.css";

</style>
