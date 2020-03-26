<template>
	<div>
		<div v-if="info" style="margin: 0px 40px;background-color: #e7e7e7;min-height: 975px;box-sizing: border-box;padding:100px 0px ;">
			<div style="text-align: center;">
				<h5 style="color: #333333;font-family: 微软雅黑;font-size: 26px;font-weight: normal;">外套精选</h5>
				<p style="font-family: 微软雅黑;font-size: 15px;color: #bababa;font-weight: normal;">information</p>
				<div style="margin:auto;margin-top: 20px;width: 40px;border-top: 1px solid #b5b5b5;height: 0px;"></div>
			</div>
			<div style="margin: 0px 136px; display: flex;flex-wrap: wrap;">
				<div v-for="(i,$index) in arr" style="flex: 1;" @click="a_arr(i),random_arr(arr),random_indexs($index)">
					<div class="wtjx" style="padding:20px 30px;margin: 10px;">
						<a style="display: block;width: 280px;margin: auto;" :href="i.href"><img :src="i.img" alt="" style="width: 100%;"></a>
						<p><a href="">{{i.title}}</a></p>
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

		computed: {
			
		},
		methods: {
			...mapActions(['a_arr','random_arr','random_indexs'])
		},
		data() {
			return {
				info: true,
				arr: [{ type:"外套",
						money: "2,695.00",
						id: "003073",
						href:"#/show/003073",
						title: "Letchover 女士休闲夹克01",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvMWU5OThjODhmYzhkZDYyNmY2MmFhYzg5ZWZmMjg3NzAtMjgweDI4MC05MC53ZWJw.webp"
					},
					{   type:"外套",
						money: "2,695.00",
						id: "003074",
						href:"#/show/003074",
						title: "Letchover 女士休闲夹克02",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvNzg1NGI4OWZkNTM4MjliMGYxOTE3YzNjMjY4OTNiZTgtMjgweDI4MC05MC53ZWJw.webp"
					},
					{   type:"外套",
						money: "2,695.00",
						id: "003075",
						href:"#/show/003075",
						title: "Letchover 女士休闲夹克03",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvYjI5ZjZhYjJiYmVlNmM0MmY1Y2RlMGFlNzhmN2JlYzktMjgweDI4MC05MC53ZWJw.webp"
					},
					{   type:"外套",
						money: "2,695.00",
						id: "003076",
						href:"#/show/003076",
						title: "Letchover 女士休闲夹克04",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvMTNmNGNhZDUzNzk4NjU0Y2E0YTM3YzQ2NDJlNDllOGMtMjgweDI4MC05MC53ZWJw.webp"
					},
					{   type:"外套",
						money: "2,695.00",
						id: "003077",
						href:"#/show/003077",
						title: "Letchover 女士休闲夹克05",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvYTM1NDNmNzVkMTczYzQ1NGJkMzU5OTZmNzQ0MDE4ZjctMjgweDI4MC05MC53ZWJw.webp"
					},
					{   type:"外套",
						money: "2,695.00",
						id: "003078",
						href:"#/show/003078",
						title: "Letchover 女士休闲夹克06",
						img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvZTk5NjhlZWFiZDZlOTIwZGZhN2ZlMWE4MTAxNjU1YjYtMjgweDI4MC05MC53ZWJw.webp"
					}
				]
			}
		}
	}
</script>

<style>

</style>
