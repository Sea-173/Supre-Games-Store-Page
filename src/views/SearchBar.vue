<template>

  <!--左上角搜索栏-->
  <div class="search-bar">
    <i class="fas fa-search search-icon-mobile"></i>

    <div class="search-bar-main">
      <div class="search-div">
        <i class="fas fa-search search-icon-pc" @click="search()"></i>
        <form>
          <input id="searchtext" placeholder="搜索" type="text" autocomplete="off">
        </form>

      </div>
      <select style="background-color: #2a2a2a; color: #e0e0e0">
        <option>按游戏名称搜索</option>
        <option>按发行厂商搜索</option>
      </select>
      <ul>
        <li><a href="#">发现</a></li>
        <li><a href="#">个人</a></li>
        <li><a href="#">库</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "SearchBar",
  methods:{
    search(){
      let a = document.getElementById("searchtext").value;
      // alert(a);
      console.log(a);
      this.$router.push({name:'search_result', params: {name: a}})
    }
  }

}
</script>

<style scoped>

</style>
