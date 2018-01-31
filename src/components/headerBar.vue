<template>

	<div id="head" :class="{act:isAct,head:isHead,trans3:isHead}">
		<div class="container">
			<span class="logo trans3">JUSTICE</span>
			<div class="c-sign fr">
				<router-link class="sign" to="/">首页</router-link>
				<span class=" h-blog">
					<span  :class="{sign:isHead,signg:isHact}"  @click="list">博客</span>

				<ul :class="{bloglist:isHead,hact:isHact}">
					<router-link class="sign-1" to="/blog/技术">
						<li>技术</li>
					</router-link>
					<router-link class="sign-1" to="/blog/设计">
						<li>设计</li>
					</router-link>
					<router-link class="sign-1" to="/blog/生活">
						<li>生活</li>
					</router-link>

				</ul>
				</span>

				<!--<router-link class="sign" to="/blog"></router-link>-->
				<router-link class="sign" to="/about">关于</router-link>
				<router-link class="sign" to="/contact">联系</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "headerBar",
		data() {
			return {
				isAct: "",
				isHead: true,
				isHact: false
			}
		},
		methods: {
			list() {
				this.isHact = !this.isHact
			}
		},

		mounted() {
			var copy = this
			window.onscroll = function() {
				//				console.info(window.scrollY);
				if(window.scrollY > 0) {
					copy.isAct = true
				} else {
					copy.isAct = false
				}
			}
		}
	};
</script>

<style>
	.bloglist {
		position: absolute;
		top: 30px;
		right: 4px;
		display: none;
	}
	.hact  li{
		padding-left: 15px;
	}
	
	.bloglist  a {
		color: white;
	}
	/*.signg {
		background-color: rgba(0, 0, 0, 0.8);
	}*/
	
	.h-blog:hover .sign {
		background-color: rgba(0, 0, 0, 0.8);
	}
	
	.bloglist li:hover {
		background-color: rgba(0, 0, 0, 0.5);
	}
	.bloglist li {
		line-height: 30px;0
		padding-left: 15px;
		width: 140px;
		text-align: left;
		height: 30px;
		list-style: none;
		background-color: rgba(0, 0, 0, 0.8);
	}
	
	.h-blog:hover .bloglist {
		display: block !important;
	}
	
	.h-blog {
		position: relative;
	}
	
	.trans3 {
		transition: all 0.3s ease-in-out;
	}
	
	.logo:hover {
		color: #fec503;
		margin-top: -1px;
		text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
	}
	
	.head.act {
		background-color: #000000 !important;
		padding: 10px 0;
		height: 60px;
	}
	
	.head.act .logo {
		font-size: 24px;
	}
	
	.head {
		position: fixed;
		top: 0;
		z-index: 1000;
		left: auto;
		width: 100%;
		height: 100px;
		/*margin: 0 auto;*/
		padding: 25px 0;
	}
	
	.logo {
		cursor: pointer;
		font-family: Helvetica, Arial, cursive;
		padding: 20px;
		font-size: 30px;
		color: #0AAC8E;
		font-weight: 400;
	}
	
	.c-sign a:hover {
		color: white;
		text-decoration: none;
	}
	
	.sign {
		cursor: pointer;
		color: white;
		font-size: 14px;
		font-weight: blod;
		line-height: 38px;
		padding: 15px;
	}
</style>