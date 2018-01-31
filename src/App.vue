<template>
	<div class="bg2">
		<div class="bg1">
			<headerBar></headerBar>
			<div id="app" >

				<!--<div class="container">-->
					<router-view/>
				<!--</div>-->

			</div>
		</div>
		<bottom></bottom>
	</div>
</template>

<script>
	import headerBar from '@/components/headerBar'
	import bottom from '@/components/bottom'
	export default {
		name: 'app',
		data(){
			return{
//				isHact:false
			}
		},
		components: {
			headerBar,
			bottom
		},
		methods:{
		}
	}
</script>

<style>
	@import url("assets/css/reset.css");
	.bg1 {
		/*position: relative;*/
		/*z-index: 100;*/
		width: 100%;
		height: auto;
		background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 100%);
	}
	
	.bg2 {
		/*position: relative;
		z-index: 1;*/
		background: url(../static/images/banner1.jpg) no-repeat;
		width: 100%;
		height: auto;
	}
	
	.container {
		width: 1170px;
		margin: 0 auto;
		padding-bottom: 50px;
	}
</style>