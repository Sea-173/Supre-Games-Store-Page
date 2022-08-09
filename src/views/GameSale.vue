<template>
  <div class="game-sale-pc">
    <div class="main">
      <div class="text-icon">
        <p>Game On Sale</p>
        <div class="icons">
          <div class="circle" onclick="slideleft()">
            <i class="fas fa-chevron-left" ></i>
          </div>
          <div class="circle" onclick="slideright()">
            <i class="fas fa-chevron-right" ></i>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="allcards" id="asd">
          <div class="card">
            <img src="../assets/sea_image/far-cry-6-cover.png" alt="">
            <div class="game-detail">
              <h6>Far Cry 6</h6>
              <div>
                <p class="p-sale-button">-35%</p>
                <p class="sale-price">$32.99</p>
                <p>$21.44</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="../assets/sea_image/rdr2.jpg" alt="">
            <div class="game-detail">
              <h6>Red Dead Redemption 2</h6>
              <div>
                <p class="p-sale-button">-50%</p>
                <p class="sale-price">$34.99</p>
                <p>$17.49</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="../assets/sea_image/c2077.jpeg" alt="">
            <div class="game-detail">
              <h6>Cyberpunk 2077</h6>
              <div>
                <p class="p-sale-button">-50%</p>
                <p class="sale-price">$29.99</p>
                <p>$14.99</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="../assets/sea_image/kena.jpg" alt="">
            <div class="game-detail">
              <h6>Kena: Bridge of Spirits</h6>
              <div>
                <p class="p-sale-button">-30%</p>
                <p class="sale-price">$20.99</p>
                <p>$14.69</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="../assets/sea_image/gta5.jpg" alt="">
            <div class="game-detail">
              <h6>Grand Theft Auto V</h6>
              <div>
                <p class="p-sale-button">-50%</p>
                <p class="sale-price">$24.99</p>
                <p>$12.49</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="../assets/sea_image/back4bld.jpg" alt="">
            <div class="game-detail">
              <h6>Back 4 Blood</h6>
              <div>
                <p class="p-sale-button">-40%</p>
                <p class="sale-price">$26.99</p>
                <p>$16.19</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="../assets/sea_image/daysgone.jpg" alt="">
            <div class="game-detail">
              <h6>Days Gone</h6>
              <div>
                <p class="p-sale-button">-40%</p>
                <p class="sale-price">$39.99</p>
                <p>$23.99</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="../assets/sea_image/horizon.jpg" alt="">
            <div class="game-detail">
              <h6>Horizon Zero Dawn</h6>
              <div>
                <p class="p-sale-button">-50%</p>
                <p class="sale-price">$39.99</p>
                <p>$19.99</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="../assets/sea_image/darkestcc.jpg" alt="">
            <div class="game-detail">
              <h6>Darkest Dungeon</h6>
              <div>
                <p class="p-sale-button">-10%</p>
                <p class="sale-price">$15.99</p>
                <p>$14.39</p>
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
  name: "GameSale"
}
</script>

<style scoped>

</style>
