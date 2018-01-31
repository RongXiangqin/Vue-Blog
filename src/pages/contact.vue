<template>
	<div class="container">
		<TitleBar></TitleBar>
		<iframe src="http://api.map.baidu.com/marker?location=39.916979519873,116.41004950566&title=我的位置&content=百度奎科大厦&output=html" width="100%" height="450px" frameborder="0" style="border: 0px; pointer-events: none;"></iframe>
		<div class="contact-container clearfix">
			<div class="fl col-md-4 contact-left">
				<div class="contact-left-1">
					<b>Contact Info</b>
				</div>
				<div class="contact-left-2">
					SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOREMQUE LAUDANTIUM, TOTAM REM APERIAM.
				</div>
				<div class="contact-left-3">
					JL.Kemacetan timur no.23. block.Q3
					<br /> Jakarta-Indonesia
				</div>
				<div class="contact-left-3">
					+6221 888 888 90
					<br /> +6221 888 88891
				</div>
				<div class="contact-left-3">
					info@yourdomain.com
				</div>
			</div>
			<div class="fl col-md-8 contact-right">
				<div class="contact-left-1">
					<b>Contact Form</b>
				</div>
				<form action="" method="post" id="form">
					<div class="contact-right-2">
						<div class="col-md-6">
							<input type="text" v-model="login.ename" name="ename" id="ename" value="" placeholder="Enter name" />
						</div>
						<div class="col-md-6">
							<input type="text" v-model="login.email" name="email" id="email" value="" placeholder="Enter email" />
						</div>

					</div>
					<div class="contact-right-2">
						<div class="col-md-12">
							<input type="text" v-model="login.esubject" name="esubject" id="esubject" value="" placeholder="Subject" />
						</div>
					</div>
					<div class="contact-right-2">
						<div class="col-md-12">
							<textarea name="emessage" v-model="login.emessage" id="emessage" rows="4" cols="25" placeholder="Message" style="height: 190px;"></textarea>
						</div>
					</div>
					<div class="col-md-12">
						<button type="button" class="btn btn-skin btn-block" name="submitcontact" id="submitcontact" @click="sub">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import TitleBar from '@/pages/TitleBar'
	
	import {postContact} from '@/service/contactService'
	export default {
		name: 'contact',
		components: {
			TitleBar
		},
		data() {
			return {
				list: "",
				login: {
					ename: "",
					email: "",
					esubject: "",
					emessage: "",
				}
			}
		},
		methods: {
			sub() {
				//提交评论信息
					postContact(this.login)
					.then((result) => {
						console.log(result);
					})
					.catch((error) => {
						console.log(error);
					});
					
			},
		},
	}
</script>

<style>
	/*背景*/
	
	.contact-container {
		background-color: white;
		width: 100%;
		padding-bottom: 60px;
	}
	
	.contact-left {
		padding: 50px 0 20px 40px;
		color: #816943;
		line-height: 1.6em;
		font-size: 14px;
	}
	
	.contact-left-1 {
		font-size: 32px;
		color: #111;
		font-family: inherit;
		line-height: 1.1;
	}
	
	.contact-left-2 {
		font-family: 微软雅黑, Merriweather, serif;
		color: rgb(102, 102, 102);
		font-weight: 400;
		margin-bottom: 20px;
		margin-top: 10px;
	}
	
	.contact-left-3 {
		margin-bottom: 10px;
	}
	
	.contact-right {
		padding: 50px 20px 60px 40px;
		line-height: 1.6em;
		font-size: 14px;
	}
	
	.contact-right-2 input,
	.contact-right-2 textarea {
		border-radius: 0 0 0 0;
		box-shadow: none;
		color: #999999;
		display: block;
		font-size: 14px;
		font-weight: normal;
		height: 40px;
		line-height: 1.2;
		margin: 10px 0;
		outline: medium none;
		padding: 5px 10px 0;
		transition: border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
		width: 100%;
		background-color: transparent;
		border: 2px solid #444444;
	}
	
	.col-md-6,
	.col-md-12 {
		margin-top: 10px;
		padding-right: 20px;
		padding-left: 0;
	}
	/*按钮*/
	
	.btn-skin {
		padding: 8px 20px;
		line-height: 26px;
		font-weight: bold;
		color: #fff;
		background-color: #0AAC8E;
		width: 100%;
		border: 0;
	}
	
	.btn {
		border-radius: 2px;
		position: relative;
		display: inline-block;
		outline: none;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 1px;
		text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
		font-size: 13px;
	}
</style>