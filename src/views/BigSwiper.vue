<!--2052535 赵海博-->
<template>
  <body>
  <div class="pc-big-ca">
    <div class="swiper-container mySwiper pc-swiper-f">
      <div class="swiper-wrapper">
        <!--        图片1-->
        <div class="swiper-slide" v-for="(index) in game_name.length" :key="index" >

          <div class="swiper-slide">
<!--          <img class="pc-swipe-img" :src="require('../assets/sea_image' + '/genshin.jpeg')" style="margin: 0; width: 100%; height: 100%" >-->
          <img class="pc-swipe-img" :src="require('../assets/sea_image' + cover[index - 1])" style="margin: 0; width: 100%; height: 100%" >
          <div class="text-area">
            <p class="r-date">{{publish_date[index - 1]}}</p>
            <p class="game-detal">{{general_intro[index - 1]}}</p>
            <div class="price-text">{{price[index - 1]}}
              <p>item.price</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
<!--        <div class="swiper-slide  pc-swipe-first-img">-->
<!--          <div class="text-area">-->
<!--            <p class="r-date">上线日期</p>-->
<!--            <p class="game-detal">游戏简介</p>-->
<!--            <div class="price-text">-->
<!--              <p>首发价</p>-->
<!--              <a href="#">现在购买</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!--图片2-->
<!--        <div class="swiper-slide  pc-swipe-second-img">-->
<!--          <div class="text-area">-->
<!--            <p class="r-date">out now</p>-->
<!--            <p class="game-detal">Venture into the brutal Norse realms and fight to fulfill a deeply personal quest.</p>-->
<!--            <div class="price-text">-->
<!--              <p>Starting at $39.99</p>-->
<!--              <a href="#">buy now</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!--        图片3-->
<!--        <div class="swiper-slide pc-swipe-third-img">-->
<!--          <div class="text-area">-->
<!--            <p class="r-date">out now</p>-->
<!--            <p class="game-detal">Venture into the brutal Norse realms and fight to fulfill a deeply personal quest.</p>-->
<!--            <div class="price-text">-->
<!--              <p>Starting at $39.99</p>-->
<!--              <a href="#">buy now</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!--        图片4-->
<!--        <div class="swiper-slide pc-swipe-fourth-img">-->
<!--          <div class="text-area">-->
<!--            <p class="r-date">Coming january 20</p>-->
<!--            <p class="game-detal">Venture into the brutal Norse realms and fight to fulfill a deeply personal quest.</p>-->
<!--            <div class="price-text">-->
<!--              <p>Starting at $20.99</p>-->
<!--              <a href="#">buy now</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!--        图片5-->
<!--        <div class="swiper-slide pc-swipe-fifth-img">-->
<!--          <div class="text-area">-->
<!--            <p class="r-date">out now</p>-->
<!--            <p class="game-detal">Venture into the brutal Norse realms and fight to fulfill a deeply personal quest.</p>-->
<!--            <div class="price-text">-->
<!--              <p>Starting at $39.99</p>-->
<!--              <a href="#">buy now</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!--        图片6-->
<!--        <div class="swiper-slide pc-swipe-sixth-img">-->
<!--          <div class="text-area">-->
<!--            <p class="r-date">out now</p>-->
<!--            <p class="game-detal">Venture into the brutal Norse realms and fight to fulfill a deeply personal quest.</p>-->
<!--            <div class="price-text">-->
<!--              <p>Starting at $39.99</p>-->
<!--              <a href="#">buy now</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <!-- 如果需要分页器 -->
      <!--      <div class="swiper-pagination"></div>-->
      <!-- 如果需要导航按钮 -->
      <!--      <div class="swiper-button-prev"></div>-->
      <!--      <div class="swiper-button-next"></div>-->
<!--    </div>-->
    <div thumbsSlider="" class="swiper mySwiper3 pc-swiper-s">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="index in game_name.length" :key="index" >
          <img :src="require('../assets/sea_image' + cover[index - 1])" width="65"  alt="缩略图1"/>
          <p>{{game_name[index - 1]}}</p>
      </div>
    </div>
  </div>
  </div>
  </body>
</template>

<script>
import Swiper from 'swiper'; // 注意引入的是Swiper
import 'swiper/css/swiper.min.css' // 注意这里的引入

export default {
  name: 'CarouselShow',
  mounted:function() {
    new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      // 其他配置...
    })
  },
  data() {
    return {
      game_name: [],
      publish_date:[],
      price:[],
      cover:[],
      general_intro:[],
      tag:[],
    }
  },
  watch: {

  },
  created() {
    let carousel_game_id = [];
    for (let i = 1 ; i <= 6; i++){
      let game_id = '000000000' + i.toString();
      carousel_game_id.push(game_id);
    }

    for(let i = 1 ; i <= carousel_game_id.length;i++){
      console.log("加载" + carousel_game_id[i - 1] + "号Swiper");
      this.getGameInfo(carousel_game_id[i - 1]);
    }

    // this.$nextTick(this.game_name.push("res.data.game_name"));
    // this.$nextTick(this.publish_date.push("res.data.publish_date"));
    // this.$nextTick(this.price.push("res.data.price"));
    // this.$nextTick(this.cover.push("/kena.jpg"));
    // this.$nextTick(this.general_intro.push("res.data.general_intro"));
    // this.$nextTick(this.tag.push("res.data.tag"));


    this.game_name.push("res.data.game_name");
    this.publish_date.push("res.data.publish_date");
    this.price.push("res.data.price");
    this.cover.push("/kena.jpg");
    this.general_intro.push("res.data.general_intro");
    this.tag.push("res.data.tag");

    this.game_name.push("res.data.game_name");
    this.publish_date.push("res.data.publish_date");
    this.price.push("res.data.price");
    this.cover.push("/r6-tumb.png");
    this.general_intro.push("res.data.general_intro");
    this.tag.push("res.data.tag");
    this.isLaunch = 1;


    console.log(this.cover[0]);
    console.log(this.cover[1]);

  },
  methods:{
    getGameInfo(game_id){
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
                console.log(res.data.result);
                alert("轮播图申请数据失败");
                break;
              case -1:
                alert("轮播图数据库端出现问题，请联系管理人员");
                break;
              case 1:
                a = a + game_id.toString() + "加载成功";
                this.game_name.push(res.data.game_name);
                console.log(res.data.game_name);
                this.publish_date.push(res.data.publish_date);
                this.price.push(res.data.price);
                this.cover.push(res.data.cover);
                console.log(res.data.cover);
                this.general_intro.push(res.data.general_intro);
                this.tag.push(res.data.tag);
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
.pc-big-ca {
  margin-top: 10px !important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: auto;
  width: 75%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.pc-big-ca .pc-swiper-f {
  width: 75%;
  margin: 0;
  padding: 0;
}
.pc-big-ca .pc-swiper-f .swiper-slide {
  width: 1150px;
  height: 650px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  position: relative;
}
.pc-big-ca .pc-swiper-f .swiper-slide .text-area {
  position: absolute;
  bottom: 50px;
  left: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 20px;
}
.pc-big-ca .pc-swiper-f .swiper-slide .text-area .r-date {
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
}
.pc-big-ca .pc-swiper-f .swiper-slide .text-area .game-detal {
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  width: 50%;
}
.pc-big-ca .pc-swiper-f .swiper-slide .text-area .price-text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 10px;
}
.pc-big-ca .pc-swiper-f .swiper-slide .text-area .price-text p {
  font-weight: 500;
}
.pc-big-ca .pc-swiper-f .swiper-slide .text-area .price-text a {
  width: 150px;
  height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  background-color: white;
  border-radius: 8px;
  text-transform: uppercase;
  color: black;
}
.pc-big-ca .pc-swiper-f .pc-swipe-first-img {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#36333300), to(#000000b6)), url(../assets/sea_image/gow-tumb.jpg);
  background-image: linear-gradient(#36333300, #000000b6), url(../assets/sea_image/gow-tumb.jpg);
  background-position: center;
}
.pc-big-ca .pc-swiper-f .pc-swipe-second-img {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#36333300), to(#000000b6)), url(../assets/sea_image/naraka-tumb.jpeg);
  background-image: linear-gradient(#36333300, #000000b6), url(../assets/sea_image/naraka-tumb.jpeg);
  background-position: center right;
}
.pc-big-ca .pc-swiper-f .pc-swipe-third-img {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#36333300), to(#000000b6)), url(../assets/sea_image/genshin-tumb.jpeg);
  background-image: linear-gradient(#36333300, #000000b6), url(../assets/sea_image/genshin-tumb.jpeg);
}
.pc-big-ca .pc-swiper-f .pc-swipe-fourth-img {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#36333300), to(#000000b6)), url(../assets/sea_image/r6-tumb.png);
  background-image: linear-gradient(#36333300, #000000b6), url(../assets/sea_image/r6-tumb.png);
  background-position: center right;
}
.pc-big-ca .pc-swiper-f .pc-swipe-fifth-img {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#36333300), to(#000000b6)), url(../assets/sea_image/far-cry-6.jpg);
  background-image: linear-gradient(#36333300, #000000b6), url(../assets/sea_image/kena-tumb.jpg);
}
.pc-big-ca .pc-swiper-f .pc-swipe-sixth-img {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#36333300), to(#000000b6)), url(../assets/sea_image/kena-tumb.jpg);
  background-image: linear-gradient(#36333300, #000000b6), url(../assets/sea_image/kena-tumb.jpg);
}
.pc-big-ca .pc-swiper-s {
  width: 23%;
  margin: 0;
}
.pc-big-ca .pc-swiper-s .swiper-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 5px;
}
.pc-big-ca .pc-swiper-s .swiper-wrapper .swiper-slide {
  width: 100%;
  height: 105px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 20px;
  padding-left: 15px;
  border-radius: 20px;
}
.pc-big-ca .pc-swiper-s .swiper-wrapper .swiper-slide:hover {
  cursor: pointer;
}
.pc-big-ca .pc-swiper-s .swiper-wrapper .swiper-slide img {
  border-radius: 10px;
}
.pc-big-ca .pc-swiper-s .swiper-wrapper .swiper-slide p {
  line-height: 25px;
}
.pc-big-ca .pc-swiper-s .swiper-slide-thumb-active {
  background-color: #2a2a2a;
}


</style>
