<template>
<div>
    <div class="todos">
       <input type="text" v-model="obj.newHabber" @keypress.enter="addHabber" placeholder="Add a new todo...">
    </div>
   <transition name="switch" mode="out-in">
    <div v-if="obj.data.length">
		
	<transition-group tag="ul" name="list" appear>
	          <li v-for="data in obj.data" :key="data.id" @click="delectHabber(data.id)">
	            {{ data.habber }}
	          </li>
	 </transition-group>

	</div>
   </transition>
</div>
</template>
<script setup>
import {ref,reactive} from 'vue'
// const props = defineProps([])
const emit = defineEmits(['change'])
// const todos=ref([
//    {text:'make the bed',id:1},
//    {text:'play video games',id:2 },
// ])
// const newTodo = ref('')
// function addTodo(){
// 	if (newTodo.value) {
// 	        const id = Math.random()
// 	        todos.value= [{ text: newTodo.value, id }, ...todos.value]
// 	        newTodo.value = ''
// 	      } else {
// 	        emit('badValue')
// 	      }
// }
// function deleteTodo(id){
// 	 todos.value = todos.value.filter(todo => todo.id != id)
// }
const obj = reactive({
	data:[
		{habber:'跳舞',id:1},
		{habber:'唱歌',id:2},
		],
	newHabber:''
})
function addHabber(){
	if(obj.newHabber){
		const id =Math.random()
		obj.data=[{habber:obj.newHabber,id:id},...obj.data]
		obj.newHabber=''
	} else{
		emit('change')
	}
}
function delectHabber(id){
	obj.data=obj.data.filter(index =>index.id!=id)
}
</script>
<style lang="less" scoped>
  .todos {
    max-width: 400px;
    margin: 20px auto;
    position: relative;
  }
  ul {
    position: relative;
    padding: 0;
  	li {
  	  list-style-type: none;
  	  display: block;
  	  margin-bottom: 10px;
  	  padding: 10px;
  	  background: white;
  	  box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
  	  border-radius: 10px;
  	  width: 100%;
  	  box-sizing: border-box;
	  &:hover {
	    cursor: pointer;
	  }
  	}
  }
  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  
  // .todos li:hover {
  //   cursor: pointer;
  // }

  /* list transitions */
  .list-enter-from {
    opacity: 0;
    transform: scale(0.6);
  }
  .list-enter-active {
    transition: all 0.4s ease;
  }
  .list-leave-to {
    opacity: 0;
    transform: scale(0.6);
  }
  .list-leave-active {
    transition: all 0.4s ease;
    position: absolute; /* for move transition after item leaves */
  }
  .list-move {
    transition: all 0.3s ease;
  }

  /* switch transitions */
  .switch-enter-from,
  .switch-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  .switch-enter-active{
    transition: all 0.5s ease;
  }
  .switch-leave-active {
    transition: all 0.5s ease;
    position: absolute;
    width: 100%;
  }
</style>