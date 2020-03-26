<template>
	<div>
		<div v-if="info" style="margin: 0px 40px;background-color: #e7e7e7;min-height: 975px;box-sizing: border-box;padding:100px 0px ;">
			<div style="text-align: center;">
				<h5 style="color: #333333;font-family: 微软雅黑;font-size: 26px;font-weight: normal;">时尚背包</h5>
				<p style="font-family: 微软雅黑;font-size: 15px;color: #bababa;font-weight: normal;">information</p>
				<div style="margin:auto;margin-top: 20px;width: 40px;border-top: 1px solid #b5b5b5;height: 0px;"></div>
			</div>
			<div style="margin: 0px 136px; display: flex;flex-wrap: wrap;">
				<div v-for="(i,$index) in arr" style="flex: 1;" @click="a_arr(i),random_arr(arr),random_indexs($index)">
					<div class="wtjx" style="padding:20px 30px;margin: 10px;">
						<a style="display: block;width: 280px;margin: auto;" :href="i.href"><img :src="i.img" alt="" style="width: 100%;"></a>
						<p><a>{{i.title}}</a></p>
					</div>
				</div>
			</div>
		</div>

	</div>
	
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'

	export default {

		computed: {
		},
		methods: {
			...mapActions(['a_arr','random_arr','random_indexs'])
		},
		data() {
			return {
				info:true,
				arr: [{type:"背包",
						money: "2,695.00",
						id: "003085",
						href:"#/show/003085",
						title: "Letchover 女包006",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvMGJkOTdiNGMwYjY0ZWVjYjE0ZjI2MTJkMTYyYTMwN2QtMjgweDI4MC05MC53ZWJw.webp"
					},
					{type:"背包",
						money: "2,695.00",
						id: "003086",
						href:"#/show/003086",
						title: "Letchover 女包005",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvMjA5ZTI1Zjg2ODQ2OTY5MThkYjAwZTQwZGY3MTBjNjgtMjgweDI4MC05MC53ZWJw.webp"
					},
					{type:"背包",
						money: "2,695.00",
						id: "003087",
						href:"#/show/003087",
						title: "Letchover 女包004",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvMTVjMzliNDg5MzljYjBkMGM2MDdmYWZhZjk0MzkzN2QtMjgweDI4MC05MC53ZWJw.webp"
					},
					{type:"背包",
						money: "2,695.00",
						id: "003088",
						href:"#/show/003088",
						title: "Letchover 女包003",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvOTYxOTU4NDNhYTFhMTNiZmUwZGMzMzM5ZjQxODVmZjktMjgweDI4MC05MC53ZWJw.webp"
					},
					{type:"背包",
						money: "2,695.00",
						id: "003089",
						href:"#/show/003089",
						title: "Letchover 女包02",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvYjNmZmExMTczMzg0OTA0NzEwNjg1ZDU4YzE4ZTdiZjItMjgweDI4MC05MC53ZWJw.webp"
					},
					{type:"背包",
						money: "2,695.00",
						id: "003090",
						href:"#/show/00390",
						title: "Letchover 女包01",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvZTUxNjRjYzQ0NjEzZjdiZDBiMWQ3YjdhN2Y1YTQwMjYtMjgweDI4MC05MC53ZWJw.webp"
					}
				]
			}
		}
	}
</script>

<style>
</style>
