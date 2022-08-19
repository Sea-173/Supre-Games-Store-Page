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
<!--      <div class="hamburger-menu" id="x-menu" onclick="openright()">-->
<!--        <div class="line" id="tr-right"></div>-->
<!--        <div class="line" id="hide"></div>-->
<!--        <div class="line" id="tr-left"></div>-->
<!--      </div>-->
      <div class="right-sec">
        <i class="fas fa-globe"></i>
        <div class="sign">
          <i class="fas fa-user"></i>
          <p>登录</p>
        </div>
        <a href="#">客户端下载</a>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: "GamePageHeader"
}
</script>

<style scoped>
@import "../assets/sea_css/index-style.css";

</style>
