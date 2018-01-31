<template>
	<div class="container">
		<div class="loading" v-if="loading">
			Loading...
		</div>

		<div v-if="error" class="error">
			{{ error }}
		</div>
		<TitleBar></TitleBar>
		<img class="about-pic" :src="list.lgImg" />
		<div class="text-box">
			<div class="text-title">
				{{list.textNmae}}
			</div>
			<div class="text-intro">
				By <span>Danny</span> on {{list.timer}}
			</div>

			<div v-html="list.textContent">

			</div>
			
			<div class="comments">
						<router-link :to="path2+list._id">comments</router-link>
				
			</div>
			<div class="list-title">Related Post</div>
			<div class="more-list clearfix">
				<div class="col-md-4 fl">
					<img src="/static/images/7.jpg" />
					<div class="pic-intro">
						Vero eros et accumsan et iusto odio
					</div>
				</div>
				<div class="col-md-4 fl">
					<img src="/static/images/8.jpg" />
					<div class="pic-intro">
						Vero eros et accumsan et iusto odio
					</div>
				</div>
				<div class="col-md-4 fl">
					<img src="/static/images/6.jpg" />
					<div class="pic-intro">
						Vero eros et accumsan et iusto odio
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import TitleBar from '@/pages/TitleBar'
	import {getList} from '@/service/contactService'
	
	export default {
		name: 'contact',
		data(){
			return{
				path2:'/contact/',
				list:""
			}
		},
		components: {
			TitleBar
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
			//			
			fetchData() {
				console.log(this.$route.params._id)
				this.error = this.list = null
				this.loading = true;
				getList({params: this.$route.params})
					.then((result) => {
						this.loading = false

						if(result.data.status) {
							this.list = result.data.data[0];
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
	}
</script>

<style>
	@import url("../assets/css/bootstrap.min.css");
	@import url("../assets/css/font-awesome.min.css");
	.top {
		padding-top: 10rem;
		min-height: 130px;
	}
	
	.pic-intro {
		font-size: 20px;
		font-weight: 500;
		color: #111;
		margin: 10px 0;
	}
	
	.list-title {
		font-size: 25px;
		font-weight: 500;
		color: #111;
		margin: 10px 0;
	}
	
	.more-list img {
		max-width: 100%;
		vertical-align: middle;
	}
	
	.text-intro {
		font-size: 14px;
		font-weight: 400;
		color: #666;
		margin: 5px 0 10px 0;
	}
	
	.text-box {
		font-family: inherit;
		padding: 50px;
		background-color: white;
		padding-bottom: 50px;
	}
	
	.text-title {
		margin: 20px 0 10px 0;
		font-size: 30px;
		font-weight: 600;
		color: #111;
	}
	
	.title {
		font-size: 31px;
		color: white;
		font-weight: 600;
		padding: 0rem 3rem 0rem 1rem;
		border-right: 1px solid white;
	}
	
	.title-2 {
		margin: 7px;
		padding-left: 15px;
		font-size: 14px;
		color: white;
	}
	
	@font-face {
		font-family: 'FontAwesome';
		src: url('../assets/fonts/fontawesome-webfont.eot');
		src: url('../assets/fonts/fontawesome-webfont.eot') format('embedded-opentype'), url('../assets/fonts/fontawesome-webfont.woff2') format('woff2'), url('../assets/fonts/fontawesome-webfont.woff') format('woff'), url('../assets/fonts/fontawesome-webfont.ttf') format('truetype'), url('../assets/fonts/fontawesome-webfont.svg') format('svg');
		font-weight: normal;
		font-style: normal
	}
	
	.fa {
		color: white;
		font-size: 27px;
		margin: 0 12px;
	}
	
	.about-pic {
		width: 100%;
	}
</style>