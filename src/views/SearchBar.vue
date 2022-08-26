<template>

  <!--左上角搜索栏-->
  <div class="search-bar">
    <i class="fas fa-search search-icon-mobile"></i>

    <div class="search-bar-main">
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
  inject:['reload'],
  data(){
    return{
      search_choice:0,
    }
  },
  methods:{
    search(){
      let a = document.getElementById("searchtext").value;

      this.search_choice = document.getElementById("choice").value;
      console.log("search_name: " + a);

      this.$router.push({name:'SearchResult', query: {search_name: a, search_choice:this.search_choice}});
    }
  }

}
</script>

<style scoped>

</style>
