<template>
	<div id="">
		<div class="bottom-bg">

			<div class="container">
				<div class="bottom-box clearfix">
					<div class="col-md-3">
						<div class="bottom-title">
							ABOUT US
						</div>
						<div class="bottom-intro">
							Aenean feugiat in ante et blandit. Vestibulum posuere molestie risus, ac interdum magna porta non. Pellentesque rutrum fringilla elementum. Curabitur tincidunt porta lorem vitae accumsan.
							<br />
							<br /> Aenean feugiat in ante et blandit. Vestibulum posuere molestie risus, ac interdum magna porta non. Pellentesque rutrum fringilla elementum. Curabitur tincidunt porta lorem vitae accumsan.
						</div>
					</div>
					<div class="col-md-3">
						<div class="bottom-title">
							RECENT POSTS
						</div>
						<div class="bottom-intro">
							<div class="post-demo">
								MOST VISITED COUNTRIES
							</div>
							<div class="post-demo">
								5 PLACES THAT MAKE A GREAT HOLIDAY
							</div>
							<div class="post-demo">
								PEBBLE TIME STEEL IS ON TRACK TO SHIP IN JULY
							</div>
							<div class="post-demo">
								STARTUP COMPANY’S CO-FOUNDER TALKS ON HIS NEW PRODUCT
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="bottom-title">
							NEWS LETTER
						</div>
						<div class="bottom-intro">
							If you want to receive our latest news send directly to your email, please leave your email address bellow. Subscription is free and you can cancel anytime.
						</div>
						<div class="inpu">
							<input class="inp" type="text" name="" id="" value="" placeholder="Your Email" />

							<input class="btn" type="submit" name="" id="" value="SUBSCRIBE" />
						</div>
					</div>
					<div class="col-md-3">
						<div class="bottom-title">
							TAGS
						</div>
						<div class="bottom-intro4">

							<router-link v-for="item in list" :to="'/'+item">{{item}}</router-link>

						</div>
					</div>
				</div>
				<div class="footer clearfix">
					<div class="col-md-4 f1">
						Copyright © 2017.Company name All rights reserved.
						<a class="muban " href="#">网页模板</a>

					</div>
					<div class="col-md-4 f2">
						<a href=""><i class="fa2 fa-twitter"></i></a>
						<a href=""><i class="fa2 fa-facebook"></i></a>
						<a href=""><i class="fa2 fa-linkedin"></i></a>
						<a href=""><i class="fa2 fa-pinterest"></i></a>
					</div>
					<div class="col-md-4 f3">
						<a href="">Privacy Policy</a>
						&nbsp;&nbsp;&nbsp;
						<a href="">Terms of Use</a>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {getList} from '@/service/contactService'
	export default {
		name: 'bottom',
		data() {
			return {
				list: []
			}
		},
		created() {
			// 组件创建完后获取数据，
			// 此时 data 已经被 observed 了
			this.fetchData()
		},

		methods: {
			//			
			fetchData() {
				var a = [];
				getList({params: this.$route.params})
					.then((result) => {
						if(result.data.status) {
							for(var i = 0; i < result.data.data.length; i++) {
								this.list = this.list.concat(result.data.data[i].textTags);
							}
							console.log(this.list)
							for(var m = 0; m < this.list.length; m++) {
								console.log(1)
								if(a.indexOf(this.list[m]) == -1) {
									a.push(this.list[m]);
								}
							}
							
							this.list = a;
//							console.log("arr=" + arr);

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
	.f3 a {
		font-weight: 600;
		color: #111;
	}
	
	.f3 {
		text-align: center;
	}
	
	.fa2 {
		color: #111;
		display: inline-block;
		font: normal normal normal 14px/1 FontAwesome;
		font-size: inherit;
		text-rendering: auto;
		-webkit-font-smoothing: antialiased;
	}
	
	.f2 a i {
		margin-top: 7px;
	}
	
	.f2 {
		text-align: center;
	}
	
	.f2 a {
		margin: 0 5px;
		text-align: center;
		display: inline-block;
		width: 35px;
		height: 35px;
		border-radius: 100%;
		font-size: 20px;
		color: #222;
		background-color: #fff;
		transition-duration: 0.4s;
	}
	
	.muban {
		color: #444;
		font-weight: bold;
	}
	
	.f1 {
		text-align: center;
		color: #816943;
	}
	
	.footer {
		padding: 40px 0;
	}
	
	.bottom-intro4 {
		margin-top: 20px;
	}
	
	.bottom-intro4 a {
		color: #444;
		border: 1px solid #444;
		padding: 4px 10px;
		margin: 2px;
		/*line-height: 2.4;*/
		font-size: 13px;
		text-transform: capitalize;
		display: inline-block;
	}
	
	.btn {
		border-radius: 2px;
		color: #fff;
		font-weight: 400;
		text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
		font-size: 13px;
		padding: 7px 20px;
		line-height: 26px;
		font-weight: bold;
		border: 0;
		background-color: #0AAC8E;
	}
	
	.inp {
		margin: 10px 0;
		border: 2px solid #000;
		padding-left: 15px;
		height: 40px;
		width: 260px;
		background-color: transparent;
	}
	
	.post-demo {
		position: relative;
		font-size: 10px;
		font-weight: 700;
		color: #444;
		padding: 15px 0 16px 15px;
	}
	
	.post-demo:before {
		content: "";
		font-family: "FontAwesome";
		left: 0;
		line-height: 1;
		margin-top: -6px;
		position: absolute;
		top: 50%;
	}
	
	.kongxi {
		background-color: #000000;
		height: 50px;
	}
	
	.bottom-bg {
		background-color: #EAECEE;
	}
	
	.container {
		width: 1170px;
		margin: 0 auto;
	}
	
	.bottom-box {
		padding: 40px 0;
	}
	
	.bottom-intro {
		font-size: 13px;
		color: #444;
		margin-top: 20px;
		font-weight: 400;
	}
	
	.bottom-title {
		font-size: 14px;
		color: #333;
		font-weight: 700;
		margin-top: 20px;
		padding: 0 15px;
		border-left: 3px solid #00B83F;
	}
</style>