<template>
  <div class="swiper third-swipe">
    
    <div class="swiper fourth-swipe">
      <h6 class="rec-text">为你推荐</h6>
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-fourth" v-for="index in recommend.length" :key="index">
          <img :src="require('../assets/sea_image' + recommend_cover[index - 1])" alt="">
          <div class="game-detail">
            <h6>{{ recommend_game_name[index - 1] }}</h6>
            <div>
              <p>¥{{recommend_price[index - 1]}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="swiper fourth-swipe">
      <h6 class="rec-text">即将上架</h6>
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-fourth" v-for="index in later.length" :key="index">
          <img :src="require('../assets/sea_image' + later_cover[index - 1])" alt="">
          <div class="game-detail">
            <h6>{{later_game_name[index - 1]}}</h6>
            <div>
              <p class="grey-text">¥{{later_price[index - 1]}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "ButtomList",
  mounted() {
    new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      // 其他配置...
    })
  },
  data() {
    return {
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
    this.getGameRank("recommend", 5, this.recommend);
    this.getGameRank("later", 5, this.recommend);

    for(let i of this.recommend) {
      this.getGameInfo(i, this.recommend_game_name, this.recommend_price, this.recommend_cover)
    }
    for(let i of this.later) {
      this.getGameInfo(i, this.later_game_name, this.later_price, this.later_cover)
    }

    this.recommend.push("0000000001");
    this.recommend_game_name.push("res.data.recommend_game_name");
    this.recommend_price.push("res.data.recommend_price");
    this.recommend_cover.push("/kena.jpg");

    this.later.push("0000000001");
    this.later_game_name.push("res.data.later_game_name");
    this.later_price.push("res.data.later_price");
    this.later_cover.push("/kena.jpg");

    this.recommend.push("0000000002");
    this.recommend_game_name.push("res.data.recommend_game_name");
    this.recommend_price.push("res.data.recommend_price");
    this.recommend_cover.push("/c2077.jpeg");

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
                a = a + game_id.toString() + "嵌套查询加载成功";
                console.log(res.data.game_name);
                console.log(res.data.price);
                console.log(res.data.cover);
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
@import "../assets/sea_css/index-style.css";

</style>
