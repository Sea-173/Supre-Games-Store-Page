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

/* 购物车 */
.header-area .uer-info {
  position: absolute;
  /*float: right;*/
  top: 10px;
  right: 120px;
  display: inline-block;
  border: 1px solid #999;
  height: 34px;
  width: 80px;
  line-height: 34px;
  /*padding: 0 20px;*/

}
.header-area .uer-info .user-info-header {
  position: absolute;
  top: 0.5px;
  right: 0.5px;
  width: 80px;
  height: 30px;
  /*background-color: red;*/
  /*border: 1px solid #999;*/
}
.header-area .uer-info:hover .user-info-header {
  background-color: #fff;
  border-bottom: 1px solid #fff;
  z-index: 20;
}
.header-area .uer-info .user-info-header span:first-child {
  margin-left: 10px;
  color: #129934;
}
.header-area .uer-info .shopping-cart-icon {
  display: inline-block;
  width: 22.2px;
  height: 19.2px;
  /*background-color: red;*/
  /*margin-top: */
  position: absolute;
  top: 5px;
  right: 20px;
  /*background:  url('../../assets/img/app-header/icons/shopping-cart.png') no-repeat;*/
  background-size: 22.2px 19.2px;
  background-position: 0 0;
}
.header-area .uer-info .shopping-cart-number {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  /*background-color: red;*/
  font-size: 10px;
  font-weight: bold;
  color: #12ab34;
  position: absolute;
  top: 0px;
  right: 19px;
}
.header-area .uer-info .user-info-list {
  /*box-sizing: border-box;*/
  position: absolute;
  top: 30px;
  right: -1px;
  width: 460px;
  background-color: #fff;
  border: 1px solid #999;
  font-size: 14px;
  z-index: 10;
  /*background-color: red;*/
}
.header-area .uer-info .user-info-list ul {
  min-height: 100px;
  max-height: 320px;
  overflow: auto;
}
.header-area .uer-info .user-info-list .product-item {
  box-sizing: border-box;
  height: 80px;
  /*width: */
  padding: 5px;
  border-bottom: 1px solid #eee;
  position: relative;
}
.header-area .uer-info .user-info-list .product-item:hover {
  background-color: #eee;
}
.header-area .uer-info .user-info-list .product-item img {
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  border: 1px solid #eee;
}
.header-area .uer-info .user-info-list .product-item .product-info {
  position: absolute;
  top: 5px;
  right: 5px;
  margin: 5px 95px;
  /*margin-bottom: 5px;*/
  height: 60px;
  line-height: 20px;
  /*background-color: red;*/
  overflow: hidden;
}
.header-area .uer-info .user-info-list .product-item .product-number {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 20px;
  line-height: 20px;
  /*background-color: red;*/
}
.header-area .uer-info .user-info-list .product-item .product-number .price {
  color: red;
}
.header-area .uer-info .user-info-list .product-item .delete-product {
  float: right;
  margin-right: 10px;
  /*font-size: 14px;*/
}
.header-area .uer-info .user-info-list .product-item .delete-product:hover {
  cursor: pointer;
  color: red;

}
.header-area .uer-info .user-info-list .total {
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
  /*position: absolute;*/
  bottom: 0;
  left: 0;
}
.header-area .uer-info .user-info-list .total span {
  margin: 0 10px;
}
.header-area .uer-info .user-info-list .total span:nth-child(3) {
  float: right;
  display: inline-block;
  background-color: #12ab34;
  height: 20px;
  line-height: 20px;
  padding: 5px 10px;
  /*padding: 5px;*/
  color: #fff;
  font-weight: bold;
  border-radius: 2px;
  margin: 5px 20px;
}
.header-area .uer-info .user-info-list .total span:nth-child(3):hover {
  cursor: pointer;
}
.header-area .uer-info .user-info-list .has-nothing {
  text-align: center;
  margin-top: 35px;
  /*background-color: red;*/
}
</style>
