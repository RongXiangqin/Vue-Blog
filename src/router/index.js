import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Router from 'vue-router'
import contact from '@/pages/contact'
import about from '@/pages/about'
import blog from '@/pages/blog'
import home from '@/pages/home'

Vue.use(Router)
require('swiper/dist/css/swiper.css')
export default new Router({
	routes: [
		
		{
			//路由配置
			path: '/blog/:sort',
			name: 'blog',
			component: blog
		},
		{
			//路由配置
			path: '/contact',
			name: 'contact',
			component: contact
		},
		{
			//路由配置
			path: '/about',
			name: 'about',
			component: about
		},
		
		{
			//路由配置
			path: '/',
			name: 'home',
			component: home
		},
		{
			//路由配置
			path: '/about/:_id',
			name: 'about',
			component: about
		},
		{
			//路由配置
			path: '/contact/:_id',
			name: 'contact',
			component: contact
		},
		{
			//路由配置
			path: '/:textTags',
			name: 'home',
			component: home
		}
	]
})