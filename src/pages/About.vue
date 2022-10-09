<template>
    <div class="about">
		<transition appear @before-enter="beforeEnter"  @enter="enter" :css="false">
			<h1>about</h1>
		</transition>
		
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    </div>
</template>
<script setup >
	import { ref } from 'vue'
	import gsap from 'gsap'
	
	
	function beforeEnter(el){
		el.style.transform = 'translateY(-60px)'
		      el.style.opacity = 0
	}
	function enter(el){
		gsap.to(el, {
		        duration: 1,
		        y: 0,
		        opacity: 1,
		        ease: 'bounce.out',
				// ease:'power4.inout',
				// rotation: 360, 
				
		        // onComplete: done
		      })

	}
</script>
<style lang="less" scoped>
	.about {
	    max-width: 600px;
	    margin: 20px auto;
		
		text-align: center;
		background-image: url(../assets/12.png);
	  }
</style>