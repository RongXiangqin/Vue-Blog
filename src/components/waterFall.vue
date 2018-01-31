<template>
	<div class="container">
		<!--<span style="color: white;">{{$route.params.id}}</span>-->

		<div id="masonry" class="clearfix ">
			<div class="loading" v-if="loading">
				Loading...
			</div>

			<div v-if="error" class="error">
				{{ error }}
			</div>
			<div class="col-md-4 w-box" v-for="item in list">
				<img :src="item.lgImg" />
				<div class="b1">

					<p class="txt1">{{item.textName}}</p>
					<p class="txt2">
						{{item.textmain}}
					</p>
					<p class="txt3">
						<router-link :to="path+item._id">Read More...</router-link>
						<!--<a href="#">Read More... </a>-->
					</p>
					<p class="txt4">{{item.timer}} BY VAFPRESS </p>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import {getList} from '@/service/contactService'
	var Masonry = require('masonry-layout');
	var imagesLoaded = require('imagesloaded');
	export default {
		name: "waterFall",
		data() {
			return {
				path:"/about/",
				loading: false,
				list: null,
				error: null
			}
		},
		created() {
			// 组件创建完后获取数据，
			// 此时 data 已经被 observed 了
			this.fetchData()
		},
		watch: {
			// 如果路由有变化，会再次执行该方法
			'$route': 'fetchData'
		},

		methods: {
			fetchData() {
				var arr = []
				this.error = this.list = null
				this.loading = true;
				getList({params: this.$route.params})
					.then((result) => {
						this.loading = false

						if(result.data.status) {
							console.log(result.data.data);
							for(var i = 0;i < result.data.data.length; i++) {
								arr.unshift(result.data.data[i])
							}
							this.list = arr;
							console.log(this.list)
						} else {
							alert(result.data.msg)
						}

					})
					.catch((error) => {
						this.error = error.toString()
					})
			}
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
	};
</script>

<style>
	.w-box {
		margin-bottom: 30px;
	}
	
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
	
	#masonry img {
		width: 100%;
	}
</style>