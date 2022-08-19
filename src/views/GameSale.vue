<!--2052535 赵海博-->
<template>
  <div class="game-sale-pc">
    <div class="main">
      <div class="text-icon">
        <p>正在热销</p>
        <div class="icons">
          <div class="circle" @onclick="slideleft()">
            <i class="fas fa-chevron-left" ></i>
          </div>
          <div class="circle" @onclick="slideright()">
            <i class="fas fa-chevron-right" ></i>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="allcards" id="asd">
          <div class="card" v-for="index in cover.length" :key="index">
            <img :src="require('../assets/sea_image' + cover[index - 1])" alt="" style="height: 100%">
<!--            <img src="../assets/sea_image/far-cry-6-cover.png" alt="">-->
            <div class="game-detail">
              <h6>{{game_name[index - 1]}}</h6>
              <div>
                <p class="p-sale-button">-20%</p>
                <p class="sale-price">{{price[index - 1]}}</p>
                <p>{{price[index - 1]}}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameSale",
  data() {
    return {
      asd_right: "0",
      // asd:document.getElementById("asd")
      game_name: [],
      publish_date:[],
      price:[],
      cover:[],
      general_intro:[],
      tag:[],

    }
  },
  mounted() {
    document.getElementById("asd").style.right = this.asd_right;
  },
  created() {
    let carousel_game_id = [];
    for (let i = 5 ; i <= 10; i++){
      let game_id = '000000000' + i.toString();
      carousel_game_id.push(game_id);
    }

    for(let i = 1 ; i <= carousel_game_id.length;i++){
      console.log("加载" + carousel_game_id[i - 1] + "号GameSale");
      this.getGameInfo(carousel_game_id[i - 1]);
    }

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

  },
  watch:{

  },
  methods:{
    slideleft(){
      // this.asd.style.right = "0";
      this.asd_right = "0";
    },
    slideright(){
      // this.asd.style.right = "50%";
      this.asd_right = "50%";
    },
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
                alert("轮播图申请数据失败111");
                break;
              case -1:
                alert("轮播图数据库端出现问题，请联系管理人员");
                break;
              case 1:
                a = a + game_id.toString() + "加载成功";
                this.game_name.push(res.data.game_name);
                this.publish_date.push(res.data.publish_date);
                this.price.push(res.data.price);
                this.cover.push(res.data.cover);
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

</style>
