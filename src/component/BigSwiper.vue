<!--2052535 赵海博-->
<template>
  <body>
  <div class="pc-big-ca">
    <div class="swiper-container mySwiper pc-swiper-f">
      <div class="swiper-wrapper" v-if="cover.length">
        <!--        图片1-->
        <div class="swiper-slide" v-for="index in game_name.length" :key="index" >

          <div class="swiper-slide">
<!--          <img class="pc-swipe-img" :src="require('../assets/sea_image' + '/genshin.jpeg')" style="margin: 0; width: 100%; height: 100%" >-->
          <img class="pc-swipe-img" :src="require('../../../ExGame-Asset/Game/' + cover[index - 1])" style="margin: 0; width: 100%; height: 100%" >

          <div class="text-area">
            <p class="r-date">{{publish_date[index - 1]}}</p>
            <p class="game-detal">{{general_intro[index - 1]}}</p>
            <div class="price-text">¥{{price[index - 1]}}

          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
      <!-- 如果需要分页器 -->
      <!--      <div class="swiper-pagination"></div>-->
      <!-- 如果需要导航按钮 -->
      <!--      <div class="swiper-button-prev"></div>-->
      <!--      <div class="swiper-button-next"></div>-->
<!--    </div>-->
    <div thumbsSlider="" class="swiper mySwiper3 pc-swiper-s">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="index in game_name.length" :key="index" >
          <img :src="require('../../../ExGame-Asset/Game/' + ancover[index - 1])" width="65"  alt="缩略图1"/>
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
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true,//修改swiper的父元素时，自动初始化swiper
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
      ancover:[],
      general_intro:[],
      tag:[],
    }
  },
  watch: {

  },
  created() {
    // bigswiper取数据
    let carousel_game_id = [];
    for (let i = 1 ; i <= 2; i++){
      let game_id = '000000000' + i.toString();
      carousel_game_id.push(game_id);
      this.cover.push(game_id + '/Cover/swiper_cover.jpg');
      this.ancover.push(game_id + '/Cover/swiper_ancover.jpg')
    }
    this.getSwiperInfo(carousel_game_id);


  },
  methods:{
    getSwiperInfo(game_id){
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
                alert("轮播图申请数据失败");
                break;
              case -1:
                alert("轮播图数据库端出现问题，请联系管理人员");
                break;
              case -2:
                alert("数据库出现问题");
                break;
              case 1:
                a = a + game_id.toString() + "加载成功";

                for(i in res.data.game_name)
                {
                  console.log('get   ' + res.data.game_name[i])
                  this.game_name.push(res.data.game_name[i]) ;
                }

                for(i in res.data.publish_date)
                {
                  console.log('get   ' + res.data.publish_date[i])
                  this.publish_date.push(res.data.publish_date[i]) ;
                }

                for(i in res.data.price)
                {
                  console.log('get   ' + res.data.price[i])
                  this.price.push(res.data.price[i]) ;
                }

                for(i in res.data.general_intro)
                {
                  console.log('get   ' + res.data.general_intro[i])
                  this.general_intro.push(res.data.general_intro[i]) ;
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


</style>
