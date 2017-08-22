<template>
    <div class="homepage">
        <div class="swipe-wrapper">
		    <mt-swipe :auto="4000">
				  <mt-swipe-item><img  src="../assets/1.jpg"></mt-swipe-item>
				  <mt-swipe-item><img  src="../assets/2.jpg"></mt-swipe-item>
				  <mt-swipe-item><img  src="../assets/3.jpg"></mt-swipe-item>
		    </mt-swipe>
        </div>
       
        <div class="context">
        	<ul class="mui-table-view"> 
        	 <h5>主打精品</h5>
			    <li class="mui-table-view-cell mui-media">

			        <!-- <a href="javascript:;"> -->
			            <img class="mui-media-object mui-pull-left" src="../assets/1.jpg">
			            <div class="mui-media-body">
			                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
			            </div>
			       <!--  </a> -->
			    </li>
			    <li class="mui-table-view-cell mui-media">
			       <!--  <a href="javascript:;"> -->
			            <img class="mui-media-object mui-pull-left" src="../assets/2.jpg">
			            <div class="mui-media-body">
			                <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
			            </div>
			        <!-- </a> -->
			    </li>
			    <li class="mui-table-view-cell mui-media">
			        <!-- <a href="javascript:;"> -->
			            <img class="mui-media-object mui-pull-left" src="../assets/3.jpg">
			            <div class="mui-media-body">
			                <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
			            </div>
			       <!--  </a> -->
			    </li>
			     <li class="mui-table-view-cell mui-media">
			       <!--  <a href="javascript:;"> -->
			            <img class="mui-media-object mui-pull-left" src="../assets/2.jpg">
			            <div class="mui-media-body">
			                <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
			            </div>
			        <!-- </a> -->
			    </li>
			    <li class="mui-table-view-cell mui-media">
			        <!-- <a href="javascript:;"> -->
			            <img class="mui-media-object mui-pull-left" src="../assets/3.jpg">
			            <div class="mui-media-body">
			                <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
			            </div>
			       <!--  </a> -->
			    </li>
            </ul>
        </div>
        <div class="young">
          <h5 style="margin:0px">青春热荐</h5>
	        <li class="mui-card" >
				<img class="mui-card-header"  src="../assets/1.jpg">
				<!--页脚，放置补充信息或支持的操作-->
				<p class="mui-card-content">微微一笑恨倾城</p>
	        </li>
            <li class="mui-card">
				<img class="mui-card-header"  src="../assets/2.jpg">
				<!--页脚，放置补充信息或支持的操作-->
				<p class="mui-card-content">夏至未至</p>
	        </li>
	        <li class="mui-card">
				<img class="mui-card-header"  src="../assets/3.jpg">
				<!--页脚，放置补充信息或支持的操作-->
				<p class="mui-card-content">悲伤逆流成河</p>
	        </li>
	        <li class="mui-card" >
				<img class="mui-card-header"  src="../assets/3.jpg">
				<!--页脚，放置补充信息或支持的操作-->
				<p class="mui-card-content">微微一笑恨倾城</p>
	        </li>
            <li class="mui-card">
				<img class="mui-card-header"  src="../assets/1.jpg">
				<!--页脚，放置补充信息或支持的操作-->
				<p class="mui-card-content">夏至未至</p>
	        </li>
	        <li class="mui-card">
				<img class="mui-card-header"  src="../assets/2.jpg">
				<!--页脚，放置补充信息或支持的操作-->
				<p class="mui-card-content">悲伤逆流成河</p>
	        </li>
        </div>  
        <div style="clear:both">
        	<mt-navbar v-model="selected" class="boy-girl">
				  <mt-tab-item id="girl">女生热荐</mt-tab-item>
				  <mt-tab-item id="boy">男生热荐</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected" >
				  <mt-tab-container-item id="girl" >
				    <mt-cell style="font-size:12px;" v-for="girlnovel in girlnovels" :title="girlnovel.name+'  作者：'+girlnovel.author+'  状态：'+girlnovel.state" />
				  </mt-tab-container-item>
				  <mt-tab-container-item id="boy" >
				    <mt-cell  v-for="boynovel in boynovels" :title="boynovel.name+'  作者：'+boynovel.author+'  状态：'+boynovel.state" />
				  </mt-tab-container-item>
            </mt-tab-container>
        </div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				selected:"girl",
				girlnovels:[
				{name:"步步为营之大小姐",author:"试梦幻",state:"更新中"},
				{name:"谁让我爱上你",author:"猫猫的梦想",state:"完本"},
				{name:"帝少的独宠娇妻",author:"云若竹",state:"完本"},
				{name:"步步为营之大小姐",author:"试梦幻",state:"更新中"}
				],
				boynovels:[
				{name:"机械公敌",author:"若依然",state:"更新中"},
				{name:"骷髅夜都市第一季",author:"梦轩郎",state:"完本"},
				{name:"嚣张兵王",author:"可乐炖鸡翅",state:"完本"},
				{name:"武极虚空",author:"一世青灯",state:"更新中"}
				]
				
			}
		}
	}
</script>
<style scoped>
.boy-girl{
	/*font-size: 15px!important;*/
	font-weight: 700;
}
.mint-cell-wrapper {
	font-size: 12px!important;
}
 .mint-cell-text{
	font-size:13px!important;
	float:left;	
}
.young li{
	list-style: none;
}
.mui-card {
	float: left;
	width:27.6%;	
}
.mui-card-header{
	padding: 0px 0px;
	/*font-size:0.9em;*/
}
.mui-card-content{
	font-size:0.7em;
	height:30px;
}
.young img{
	height:100px;
}
.swipe-wrapper{
	width:100%;
	height:200px;
}	
.swipe-wrapper img{
	width:100%;
}
.context img{
	width:100%;
}
.context ul li {
	list-style-type:none;
}
.context ul{
	/*margin-left:-40px;*/
}
.context p{
	font-size: 12px;
}
.context .mui-table-view .mui-media-object {
    line-height: 42px;
    max-width: 55px;
    height: 60px;
}
</style>