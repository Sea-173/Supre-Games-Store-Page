<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    }
  },
  data() {
    return{
      isRouterAlive: true                    //控制视图是否显示的变量
    }
  },
  methods: {

    }
  }
</script>


<style scoped="scoped">
	#app{
		width: 100vw;
		height: 100vh;
		background-color: #f5f5f5;
	}
</style>
