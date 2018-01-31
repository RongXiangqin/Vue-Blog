<template>
	<div class="blog container">
		<TitleBar></TitleBar>
		<waterFall></waterFall>

			
		</div>
	</div>
</template>

<script>

//import {getList} from '@/service/contactService'
	import TitleBar from '@/pages/TitleBar'
	import waterFall from '@/components/waterFall'
	
	export default {
		name: 'blog',
		components:{
			TitleBar,
			waterFall, 
		},
		updated() {
			imagesLoaded('#masonry', function() {
				new Masonry('#masonry', {
					itemSelector: '.col-md-4',
					gutter: 0,
					isAnimated: true
				})
			})
		}
	}
</script>

<style>
	.txt4 {
		margin-top: 20px;
		color: #bbb;
		font-size: 15px;
	}
	
	.txt3 a {
		color: #0aac8e;
		font-weight: bold;
	}
	
	.txt2 {
		color: #816943;
		margin: 0 0 10px;
	}
	
	.txt1 {
		font-weight: 500;
		color: #333;
		font-size: 24px;
		margin: 20px 0;
	}
	
	.b1 {
		background-color: white;
		padding: 10px 30px 30px;
	}
	
	.blog {
		/*padding-top: 10rem;*/
	}
	
	.blog-box img {
		width: 100%;
	}
</style>