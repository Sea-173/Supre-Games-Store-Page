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
          <div class="card" v-for="index in sale_ancover.length" :key="index">
            <img :src="require('../../../ExGame-Asset/Game/' + sale_ancover[index - 1])" alt="">
<!--            <img src="../assets/sea_image/far-cry-6-swiper_cover.png" alt="">-->
            <div class="game-detail">
              <h6>{{ sale_game_name[index - 1] }}</h6>
              <div>
                <p class="p-sale-button">-{{ 100 - sale_discount[index - 1] * 100 }}%</p>
                <p class="sale-price-">{{ sale_price[index - 1] }}</p>
                <p>{{ numFilter(sale_price[index - 1] * sale_discount[index - 1]) }}</p>
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
      sale_game_name: ['1'],
      sale_price:[],
      sale_ancover:[],
      sale_discount:[]
    }
  },
  mounted() {
    document.getElementById("asd").style.right = this.asd_right;
  },
  created() {
    let carousel_game_id = [];
    for (let i = 1 ; i <= 2; i++){
      let game_id = '000000000' + i.toString();
      carousel_game_id.push(game_id);
      this.sale_ancover.push(game_id + '/Cover/sale_ancover.jpg');
    }

    this.getSaleInfo(carousel_game_id);


  },
  watch:{

  },
  methods:{
    numFilter(value) {
      const realVal = parseFloat(value).toFixed(2);
      return realVal;
    },
    slideleft(){
      // this.asd.style.right = "0";
      this.asd_right = "0";
    },
    slideright(){
      // this.asd.style.right = "50%";
      this.asd_right = "50%";
    },
    getSaleInfo(game_id){
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
                alert("轮播图申请数据失败111");
                break;
              case -1:
                alert("轮播图数据库端出现问题，请联系管理人员");
                break;
              case 1:
                a = a + game_id.toString() + "加载成功";
                // alert("!!!");
                this.sale_game_name.pop()
                for(i in res.data.game_name)
                {
                  console.log('get   ' + res.data.game_name[i])
                  this.sale_game_name.push(res.data.game_name[i]) ;
                }

                for(i in res.data.price)
                {
                  console.log('get   ' + res.data.price[i])
                  this.sale_price.push(res.data.price[i]) ;
                }

                for(i in res.data.discount)
                {
                  console.log('get   ' + res.data.discount[i])
                  this.sale_discount.push(res.data.discount[i]) ;
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
