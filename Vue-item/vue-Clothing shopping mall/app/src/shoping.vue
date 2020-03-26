<template>
	<div>
		<div style="max-width: 1280px;margin: auto;padding: 40px;">
			<div style="margin: 40px 0px;font-size: 16px;font-weight: normal;color: #2f9a4c;padding: 15px 8px;border: 1px solid #88dfae;font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;">
				<span v-if="shoping_data1.length">{{shoping_data1[shoping_data1.length-1]['title']}}<span>成功添加进您的购物车</span></span>
				<span v-if="shoping_data1.length==0">
					快去购物吧
				</span>
				<a style="float: right; background-color: #10ac62;color: #fff;font-size: 14px;margin-top: -10px;padding: 10px 20px;" :href="routers" @click="rout()">继续购物</a>
			</div>
			<div class="shoping">
				<div class="shoping-content">
					<div style="border-bottom: 2px solid #C0C4CC;">
						<div style="width: 55%;">
							商品
						</div>
						<div style="width: 16%;">
							价格
						</div>
						<div style="width: 17%;">
							数量
						</div>
						<div style="width: 20%;">
							合计
						</div>
					</div>
					<div v-for="(i,$index) in shoping_data1">
						<div>
							<i class="el-icon-circle-close" style="font-size: 18px;" @click="pop_shopings(i)"></i>
						</div>
						<div>
							<img :src="i.img" alt="" width="90">
						</div>
						<div style="width: 30%;">
							<span style="font-weight: normal;color: #777777;font-family:'微软雅黑',Helvetica,Arial,Verdana,sans-serif;">{{i.title}}</span>
						</div>
						<div>
							<span style="font-size: 14px;font-weight: normal;color: #777777;">￥{{i.money}}</span>
						</div>
						<div>
							<button type="button" class="jian" @click="jians(i)">-</button><button type="button" class="shu">{{i.num}}</button><button
							 type="button" class="jia" @click="jias(i)">+</button>
						</div>
						<div>
							<span style="font-size: 14px;font-weight: normal;color: #777777;">￥{{ToFixeds((parseFloat(i.money.split(',').join(''))*i.num).toFixed(2)) }}</span>
						</div>
					</div>
				</div>
				<div class="shoping-money">
					<div style="font-size: 16px;font-weight: bold;color: rgb(85, 85, 85);font-family: 微软雅黑;border-bottom: 2px solid #C0C4CC;padding: 4px 0px;">
						购物车总计<span style="float: right;margin-right: 10px;">￥<span>{{ToFixeds(zongs)}}</span></span>
					</div>
					<div style=" font-size: 14px;font-weight: bold;color: #777777;line-height: 2em;border-bottom: 1px solid #C0C4CC;">
						
						<p>运费<span style="float: right;margin-right: 10px;">免运费</span></p>
						<p>购物车小计<span  style="float: right;margin-right: 10px;">￥<span>{{ToFixeds(zongs)}}</span></span></p>
					</div>
					<div style="font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;font-size: 14px;line-height: 3em;color: #777777;font-weight: bold;border-bottom:2px solid #C0C4CC;">
						订单总计<span></span>
					</div>
					<div>
						<a class="shouyin">前往收银台</a>
					</div>
					<div>
						<p style="margin-bottom: 10px;font-size: 16px;font-weight: bold;color: rgb(85, 85, 85);font-family: 微软雅黑;border-bottom: 2px solid #C0C4CC;padding: 4px 0px;">优惠卷:</p>
						<div>
							<input type="text" placeholder="优惠卷代码" style="box-sizing: border-box;width: 100%;padding: 9px 10px 8px 10px;border: solid 1px #e0e0e0;font-size: 16px;color: #ddd;">
						</div>
						<div style=" margin: 20px 0px;text-align: center;border: 1px solid #000000;cursor:pointer;font-size: 16px;font-weight: normal;color: #777777;border-color: #777777;background-color: #ffffff;padding-top: 8px;padding-bottom: 8px;">
							使用优惠卷
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	export default {
		data(){
			return{
				routers:''
			}
			
		},
		computed: {
			...mapGetters(['shoping_data1', 'zongs'])
		},
		methods: {
			...mapActions(['pop_shopings', 'jias', 'jians']),
			ToFixeds(a) {
				a += '';
				var x = a.split('.');
				var x1 = x[0];
				var x2 = x.length > 1 ? '.' + x[1] : '';
				var rgx = /(\d+)(\d{3})/;
				while (rgx.test(x1)) {
					x1 = x1.replace(rgx, '$1' + ',' + '$2');
				}
				return x1 + x2;
			},
			rout(){
				if(this.shoping_data1.length){
					var a="外套"
					var b="女鞋"
					var c="背包"
					if(this.shoping_data1[this.shoping_data1.length-1]['type']==a){
						this.routers='#/no2'
					}
					if(this.shoping_data1[this.shoping_data1.length-1]['type']==b){
						this.routers='#/no3'
					}
					if(this.shoping_data1[this.shoping_data1.length-1]['type']==c){
						this.routers='#/no4'
					}
				}else{
					this.routers='#/'
					
				}
				
			}

		}
	}
</script>

<style>
	.shouyin {
		margin: 20px 0px;
		display: block;
		padding: 6px 10px;
		background: #c7c0c7;
		text-align: center;
		line-height: 1.5em;
		color: #fff;
		cursor:pointer;
	}
	.shouyin:hover{
		background: #000000;
	}

	.el-icon-circle-close:hover {
		color: #409EFF;
	}

	.shoping {
		display: flex;
	}

	.shoping-content {

		flex: 0.7;
	}

	.shoping-content>div {
		display: table;
		width: 100%;
	}

	.shoping-content>div>div {
		display: table-cell;
		font-size: 16px;
		font-weight: bold;
		color: rgb(85, 85, 85);
		font-family: 微软雅黑;
		padding-top: 4px;
		padding-bottom: 4px;
		padding-left: 12px;
		padding-right: 12px;
		border-color: rgb(221, 221, 221);
		border-bottom: 1px dotted #ddd;
		vertical-align: middle;
	}

	.shoping-money {
		flex: 0.3;
		margin-left: 20px;
		box-sizing: border-box;
		padding: 0px 20px;
		border-left: 1px solid #808080;
	}
</style>
