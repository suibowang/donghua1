<template>
<div class="home">
<div>主页</div>
	<transition name="toast">
	       <Toast v-if="showToast" />
	 </transition>
<Todos @change="triggerToast"></Todos>
</div>
</template>
<script setup>
import Toast from '../components/Toast.vue'
import Todos from '../components/Todos.vue'
import {ref} from 'vue'
const showToast = ref(false)
function triggerToast(){
	 showToast.value = true;
     setTimeout(() => showToast.value = false, 3000)
}
</script>
<style lang="less" scoped>
	.home{
		background-image: url(../assets/14.png);
	}
	
  /* enter transitions */
  .toast-enter-active {
    animation: wobble 0.5s ease;
  }
  /* leave transitions */
  .toast-leave-to {
    opacity: 0;
    transform: translateY(-60px);
  }
  .toast-leave-active {
    transition: all 0.3s ease;
  }

  @keyframes wobble {
    0% { transform: translateY(-100px); opacity: 0 }
    50% { transform: translateY(0px); opacity: 1 }
    60% { transform: translateX(8px); opacity: 1 }
    70% { transform: translateX(-8px); opacity: 1 }
    80% { transform: translateX(4px); opacity: 1 }
    90% { transform: translateX(-4px); opacity: 1 }
    100% { transform: translateX(0px); opacity: 1 }
  }
</style>