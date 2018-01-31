import Vue from "vue"

let postContact=(data)=>{
	return Vue.axios.post('/api/blogContact/', data);
}
//其他在这继续写
let getList=(message)=>{
	return Vue.axios.get('/api/getBlog/', message);
}

//出口
export{
	postContact,
	getList
}
