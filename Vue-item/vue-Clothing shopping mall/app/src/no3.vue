<template>
	<div>
		<div v-if="info" style="margin: 0px 40px;background-color: #e7e7e7;min-height: 975px;box-sizing: border-box;padding:100px 0px ;">
			<div style="text-align: center;">
				<h5 style="color: #333333;font-family: 微软雅黑;font-size: 26px;font-weight: normal;">优质女鞋</h5>
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
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	export default {
		created(){
			console.log(this)
		},
		computed: {},
		methods: {
			...mapActions(['a_arr','random_arr','random_indexs'])
		},
		data() {
			return {
				info:true,
				arr: [{type:"女鞋",
						money: "2,695.00",
						id: "003079",
						href:"#/show/003079",
						title: "Letchover 女鞋 001",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvMTE3OTQyNzY1NzM2NmY5ZWFhNDU0ZWZkN2ZjMzZjYzktMjgweDI4MC05MC53ZWJw.webp"
					},
					{type:"女鞋",
						money: "2,695.00",
						id: "003080",
						href:"#/show/003080",
						title: "Letchover 女鞋 002",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvN2NlYTAxYTUxNGQwNDQ3Mjg2NjlmZDQwZmI3ODMyMmItMjgweDI4MC05MC53ZWJw.webp"
					},
					{type:"女鞋",
						money: "2,695.00",
						id: "003081",
						href:"#/show/003081",
						title: "Letchover 女鞋 003",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvODBmMzhjZjU2ZGE4NGJiYzI2MGQxZTliYmM2MmJjZDYtMjgweDI4MC05MC53ZWJw.webp"
					},
					{type:"女鞋",
						money: "2,695.00",
						id: "003082",
						href:"#/show/003082",
						title: "Letchover 女鞋 004",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvOTY5Njc1YmRmMTNiODViYjNiZTExMmM4ODU5OTkxMmUtMjgweDI4MC05MC53ZWJw.webp"
					},
					{type:"女鞋",
						money: "2,695.00",
						id: "003083",
						href:"#/show/003083",
						title: "Letchover 女鞋 005",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvYTM0MWM0NjdiYjUyZDhjYTc5N2VmOTEzYzYyYTY2NjctMjgweDI4MC05MC53ZWJw.webp"
					},
					{type:"女鞋",
						money: "2,695.00",
						id: "003084",
						href:"#/show/003084",
						title: "Letchover 女鞋 006",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvYTQxYWQwZTkyZjhmMWM3OTE3ZGZkOTk4NTA2NGI3MmMtMjgweDI4MC05MC53ZWJw.webp"
					}
				]
			}
		}
	}
</script>

<style>
</style>
