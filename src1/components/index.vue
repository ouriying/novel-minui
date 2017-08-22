<template>
<div class="">
    <mt-header fixed title="小说网"></mt-header>
    <mt-tabbar v-model="selected">
  <mt-tab-item id="tab1">
    <router-link to="/dao1"><img slot="icon" src="../assets/logo.png">
    首页</router-link>
    
  </mt-tab-item>
  <mt-tab-item id="tab2">
     <router-link to="/dao2"><img slot="icon" src="../assets/logo.png">
    分类</router-link>
  </mt-tab-item>
  <mt-tab-item id="tab3">
     <router-link to="/dao3"><img slot="icon" src="../assets/logo.png">
    新书</router-link>
  </mt-tab-item>
  <mt-tab-item id="tab4">
     <router-link to="/dao4"><img slot="icon" src="../assets/logo.png">
    完本</router-link>
  </mt-tab-item>
</mt-tabbar>
</div>
</template>
<script>
import { Tabbar, TabItem } from 'mint-ui';
import {Toast} from 'mint-ui';
	export default{
		
		data(){
			return {
        selected:true,
				mas:"Welcome to My vue.app"
			}
		},
		methods:{
			toast:function(a,b){
				Toast('成功引用Toast')
			}
		}
	}
</script>
<style scoped>
  .mint-tabbar > .mint-tab-item.is-selected{
    background:#26a2ff!important;
  }
</style>