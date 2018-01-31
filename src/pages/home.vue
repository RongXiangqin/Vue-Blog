<template>
	<div id="">

		<slider></slider>
		<div class="container">

			<div class="line">

			</div>
		</div>
		<TitleBar></TitleBar>
		<waterFall></waterFall>
	</div>
</template>

<script>
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	import slider from '@/components/slider';
	import waterFall from '@/components/waterFall'
	import TitleBar from '@/pages/TitleBar'
	export default {
		name: 'home',
		components: {
			TitleBar,
			slider,
			waterFall,
			VueAwesomeSwiper
		}
	}
</script>

<style>
	.line {
		width: 100%;
		background-color: white;
		height: 4px;
	}
</style>