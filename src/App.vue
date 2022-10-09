<script setup>
import {onMounted,onBeforeMount,reactive} from 'vue'
	onBeforeMount(()=>{
		console.log(123)
	})
	
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
	<div class="main">
	<div class="nav">
		<div>123</div>
		<router-link to="/home">Home</router-link> |
		<router-link to="/about">About</router-link> | 
		<router-link to="/contact">Contact</router-link>
	</div>
<router-view v-slot="{Component}">
	<transition name="route" mode="out-in">
		<component :is="Component"></component>
	</transition>
</router-view>
</div>
   </template>
   
<style lang="less" scoped>
body{
	background-color: aliceblue;
}
.main{
	  position:absolute;
	  width: 375px;
	  height: 667px;
	  left:50%;
	  margin-left: -187.5px;
	  top:50%;
	  margin-top:-333.5px;
	  // text-align: center;
}
.nav{
	padding: 30px;
	  font-weight: bold;
	  color: #2c3e50;
	  text-align: center;
	  a.router-link-exact-active {
	    color: #42b983;
	  }
}
	  // 路由动画
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active {
  transition: all 0.5s ease-out; 
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.route-leave-active {
  transition: all 0.5s ease-in; 
}
</style>
