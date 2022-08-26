<template>
<div>
  <div class="userinfo">
    这是登录弹窗信息
  </div>
<!--    随便放了个图片-->
  <div class="userinfo">
    <img class="pc-swipe-img" :src="require('../../../ExGame-Asset/Game/' + '0000000001' + '/Cover/ancover.jpg')" style="margin: 0; width: 100px; height: 100%" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
.userinfo{
  position: relative;
  z-index: 10;
  text-align: right;
  transform: translate(-120px);
  display: inline-block;
}
</style>
