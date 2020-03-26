<template>
	<div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<div class="foot_nav">
			
			<a :href="i.href" v-for="i in nav_arr" @click="selected=i.tit" :class="selected==i.tit?'acolor':''">
				<div><i slot="icon" class="iconfont" v-html="i.icon"></i></div>
				<p>{{i.tit}}</p>
			</a>
			
		</div>

	</div>
</template>
<script>

	export default {

		name: 'app',
		data() {
			return {
				
				selected: '微信',
				nav_arr: [{icon:"&#xe64a;",tit:"微信",href:"#/"},{icon:"&#xe60c;",tit:"通讯录",href:"#/no2"},{icon:"&#xe669;",tit:"发现",href:"#/no3"},{icon:"&#xe604;",tit:"我",href:"#/no4"}]
			}
		},
		
	}
</script>
<style>
	* {
		margin: 0px;
		padding: 0px;
		text-decoration: none;
	}
	.acolor{
		color: #00b300 !important;
	}
#app{
	height: 30.74074rem;
	width: 100%;
	position: relative;
}
.content{
		width: 100%;
		top: 1.925925rem;
		height: 26.311111rem;
		overflow: hidden;
		overflow-y: scroll;
		position: absolute;
	}

	.foot_nav {
		height: 2.459259rem;
		background-color: #ddd;
		position: absolute;
		bottom: 0px;
		width: 100%;
		display: flex;
		border-top: 1px solid #ccc;
	}

	.foot_nav a {
		flex: 1;
		text-align: center;
		color: #000;
	}

	.foot_nav p {
		font-size: 0.444444rem;
	}

	.foot_nav i {
		font-size: 0.948148rem;
	}
.foot_nav a>div{
	margin-top: 0.148148rem;
}

</style>
