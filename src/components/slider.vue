<template>
	<swiper  :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
		<!-- slides -->
		<swiper-slide class="slid">
			<div class="col-md-12 slid1">
				<p class="s1">Free Bootstrap Themes Html5xCss3 dot com</p>
				<p class="s2">Nunc eu velit metus. Donec in massa libero. Donec bibendum orci a lorem scelerisque luctus. Aliquam et ante quis erat semper pretium.</p>
				<span class="find-more">FIND OUT MORE</span>
			</div>
		</swiper-slide>
		<swiper-slide>
			<div class="col-md-12 slid1">
				<p class="s1">Free Bootstrap Themes Html5xCss3 dot com</p>
				<p class="s2">Suspendisse porttitor sapien ac lectus euismod imperdiet. Curabitur nec nibh at massa pellentesque accumsan eu id nibh. Donec accumsan ut mi.</p>
				<span class="find-more">FIND OUT MORE</span>
			</div>
		</swiper-slide>

		<!-- Optional controls -->
		<!--<div class="swiper-pagination" slot="pagination"></div>-->
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
		<div class="swiper-scrollbar" slot="scrollbar"></div>
	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	// swiper options example:
	export default {

		name: 'slider',
		components: {
			swiper,
			swiperSlide
		},

		data() {
			return {
				// NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
				// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
				notNextTick: true,
				swiperOption: {
					loop:true,
					// swiper options 所有的配置同swiper官方api配置
					autoplay: 3000,
					direction: 'horizontal',
					grabCursor: true,
					setWrapperSize: true,
					autoHeight: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					prevButton: '.swiper-button-prev',
					nextButton: '.swiper-button-next',
					scrollbar: '.swiper-scrollbar',
//					mousewheelControl: true,
					observeParents: true,
					// if you need use plugins in the swiper, you can config in here like this
					// 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
					debugger: true,
					// swiper callbacks
					// swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
					onTransitionStart(swiper) {
						console.log(swiper)
					}
					// more Swiper configs and callbacks...
					// ...
				}
			}
		},
		// you can find current swiper instance object like this, while the notNextTick property value must be true
		// 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		mounted() {
			// you can use current swiper instance object to do something(swiper methods)
			// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
			console.log('this is current swiper instance object', this.swiper)
			this.swiper.slideTo(3, 1000, false);

		}
	}
</script>

<style>
	.find-more {
		background-color: #0AAC8E;
		border: none;
		padding: 10px 20px;
		border-radius: 2px;
		position: relative;
		display: inline-block;
		outline: none;
		color: #fff;
		font-weight: 400;
		text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
		font-size: 13px;
	}
	
	.s2 {
		margin: 50px 0;
		font-size: 18px;
		font-weight: 300;
		height: 60px;
		color: rgba(255, 255, 255, .7);
	}
	
	.s1 {
		margin-top: 0;
		margin-bottom: 0;
		text-transform: uppercase;
		font-weight: 700;
		color: #fff;
		font-size: 65px;
	}
	
	.swiper-wrapper {
		height: 500px !important;
		padding: 150px 0 0 0;
	}
	
	.slid1 {
		text-align: center;
	}
</style>