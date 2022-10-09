<template>
    <div class="contact">
		<h1>Contact</h1>
		<transition-group appear tag="ul"  @before-enter="beforeEnter" @enter="enter">
			<li v-for="(data,index) in icons" :key="data.name"  :data-index="index" :data-name="data.name">
				<span class="material-icons">{{data.name}}</span>
				<div> {{data.text}}</div>
			</li>
		</transition-group>
      
    </div>
</template>
<script setup>
	import { ref } from 'vue'
	import gsap from 'gsap'
	const icons = ref([
		{name:'邮箱',text:'邮箱地址'},
		{name:'电话',text:'电话信息'},
		{name:'职位',text:'职位信息'},
		{name:'工作',text:'工作时间'},
		]) 
		 const beforeEnter = (el) => {
		      el.style.opacity = 0
		      el.style.transform = 'translateY(100px)'
		    }
		
		    const enter = (el,done) => {
				console.log(icons.value)
				// console.log(el.dataset)
		      gsap.to(el, {
		        opacity: 1,
		        y: 0,
		        duration: 0.8,
		        onComplete: done,
		        delay: el.dataset.index * 0.2
				
		      })
		    }
</script>
<style >
	h1{
		text-align: center;
	}
	.contact{
		background-image: url(../assets/13.png);
	}
	.contact ul {
	    padding: 0;
	    display: grid;
	    grid-template-columns: 1fr 1fr;
	    grid-gap: 20px;
	    max-width: 400px;
	    margin: 60px auto;
	  }
	  .contact li {
	    list-style-type: none;
	    background: white;
	    padding: 30px;
	    border-radius: 10px;
	    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
	    cursor: pointer;
	    line-height: 1.5em;
	  }
</style>