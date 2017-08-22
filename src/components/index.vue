<template>
        <div class="home">
            <mt-header fixed title="小说网"></mt-header>
            <mt-navbar fixed style="top:55px;">
            
            <mt-tab-item id="tab1"><router-link to="/dao1">
              首页</router-link>
            </mt-tab-item>
             <mt-tab-item id="tab2"><router-link to="/dao2">
              分类</router-link>
            </mt-tab-item>

             <mt-tab-item id="tab3"><router-link to="/dao3">
              完本</router-link>
            </mt-tab-item>
           <mt-tab-item id="tab4"> <router-link to="/dao4">
              <!-- <img slot="icon" src="../assets/logo.png"> -->
              新书</router-link>
            </mt-tab-item>
          </mt-navbar>
        </div>
</template>
<script>
// import { Tabbar, TabItem } from 'mint-ui';
import {Toast} from 'mint-ui';
	export default{
		
		data(){
			return {
				
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
  .home{
    margin-bottom:85px;
  }
	.home a{
		display: block;
    text-decoration: none;
    height:10px;
    vertical-align: middle;
    /*padding:10px;*/
    font-size:14px;
    color:#26a2ff;
	}
 .mint-navbar{
  margin-top:-20px;
  margin-bottom:5px;
  padding-bottom:10px;
  border-bottom:2px solid #eee;
  /*box-shadow: 4px;*/
 }
 .router-link-active{
  /*background: #26a2ff;*/
  color:#3879D9!important;
  font-weight: 600;
 /* font-weight:900px!important;*/
 }
</style>