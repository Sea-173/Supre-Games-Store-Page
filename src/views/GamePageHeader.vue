<!--2052535 赵海博-->
<template>
  <header>
    <div class="navbar">
      <div class="left-sec">
<!--        <img src="../assets/sea_image/epic logo.png" alt="">-->
        <ul class="pc-navbar-list">
          <li><a id="active" href="#">页面1：商店</a></li>
          <li><a href="#">页面2：FAQ</a></li>
          <li><a href="#">页面3：帮助</a></li>
          <li><a href="#">页面4</a></li>
        </ul>
      </div>
<!--      </div>-->
<!--      <div class="hamburger-menu" id="x-menu" onclick="openright()">-->
<!--        <div class="line" id="tr-right"></div>-->
<!--        <div class="line" id="hide"></div>-->
<!--        <div class="line" id="tr-left"></div>-->
<!--      </div>-->
      <div class="right-sec">
        <div class="sign" @mouseenter="showUserInfo" @mouseleave="showUserInfo">
          <i class="fas fa-user"></i>
              <p>登录</p>
        </div>
        <div class="userinfo" v-if="is_show_userinfo">
          <div class="title">个人信息</div>
          <div class="swiper third-swipe">
            <div class="swiper-wrapper">
              <div class="swiper-slide swiper-third">

                <div class="car-tuning">
<!--                  <img :src="require('../../../ExGame-Asset/Game/' + '0000000001' + '/Cover/ancover.jpg')" alt="" class="left-img">-->
                  <!--          {{cover[index - 1]}}-->
                  <div class="game-detail">
                    <h6>1</h6>
<!--                    <p class="new-epic-button">新品</p>-->
<!--                    <div>-->
<!--                      <p class="p-sale-button">-20%</p>-->
<!--                      <p class="sale-price">2</p>-->
<!--                      <p>3</p>-->
<!--                    </div>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
<!--          <img :src="require('../../../ExGame-Asset/Game/' + '0000000001' + '/Cover/ancover.jpg')" alt="" class="left-img">-->
        </div>

        <a href="#" >客户端下载</a>
      </div>
<!--      </div>-->
      </div>
<!--    </div>-->
  </header>
</template>

<script>
export default {
  name: "GamePageHeader",
  data(){
    return{
      is_show_userinfo:1
    }
  }
}
</script>

<style scoped>
@import "../assets/sea_css/index-style.css";

</style>
