<template>
	<div id="app">
		<header>
			<div class="h-log">
				<img src="https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDUvY2ExMzNmNDdmYThiZWQ2MmUxNTA5NGFjNDcyYjc0ZDYtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp"
				 alt />
			</div>
			<nav>
				<ul>
					<li>
						<a href="#/">商城首页</a>
					</li>
					<li>
						<a href="#/no2">外套精选</a>
					</li>
					<li>
						<a href="#/no3">优质女鞋</a>
					</li>
					<li>
						<a href="#/no4">时尚背包</a>
					</li>
					<li>
						<a href="#/no5">品牌故事</a>
					</li>
				</ul>
			</nav>
			<div class="h-icon">
				<span>
					<i class="el-icon-search"></i>
				</span>
				<span>
					<i class="el-icon-user"></i>
				</span>
				<span>
					<a href="#/shoping"><i class="el-icon-goods"></i></a>
				</span>
			</div>
		</header>
		<div class="content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>

		<footer>
			<div class="f-content">
				<div class="f-content-item">
					<div class="f-c-title">
						<p>关于色差</p>
						<p>about color</p>
					</div>
					<div class="f-c-content">本店商品均为易碎品，非质量问题谢绝退换，如有质量问题，本店承担运费调换</div>
				</div>
				<div class="f-content-item">
					<div class="f-c-title">
						<p>关于退货</p>
						<p>about change</p>
					</div>
					<div class="f-c-content">本店商品均为易碎品，非质量问题谢绝退换，如有质量问题，本店承担运费调换</div>
				</div>
				<div class="f-content-item">
					<div class="f-c-title">
						<p>扫码关注</p>
						<p>about change</p>
					</div>
					<div class="f-c-content">本店商品均为易碎品，非质量问题谢绝退换，如有质量问题，本店承担运费调换</div>
				</div>
				<div class="f-content-item">
					<div class="f-c-title">
						<p>扫码关注</p>
						<p>about color</p>
					</div>
					<div class="f-c-content"><img src="https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvZjcyNGY5NWVhZjM4ZGM0YjE0NjkzMjEwNDIyN2M2ZmMtMTAweDEwMC05MC53ZWJw.webp"
						 alt=""></div>
				</div>
			</div>
			<div class="f-c">
				<p>Copyright © 2010-2017</p>
				<p>FASHION WEB</p>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: "app",
		data() {
			return {}
		}
	};
</script>

<style>
	.clearfix::before,
	.clearfix::after {
		content: "";
		display: table;
	}

	.clearfix::after {
		clear: both;
	}

	.wtjx {
		transition: all 0.3s;
		text-align: center;
	}

	.wtjx a {
		font-size: 12px;
		color: #666;
		font-family: "微软雅黑", Helvetica, Arial, Verdana, sans-serif;
	}

	.wtjx:hover {
		transform: translateY(-10px);
		box-shadow: 1px 3px 20px #adad85;
		color: #000 !important;
	}
	.content{
		margin-bottom: 50px;
	}

	* {
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}

	ul {
		list-style: none;
	}

	header {
		width: 100%;
		padding: 0 40px;
		display: table;
		height: 125px;
		box-sizing: border-box;
	}

	header .h-log {
		display: table-cell;
		vertical-align: middle;
		height: 31px;
	}

	header .h-log img {
		height: 100%;
		width: auto;
		display: inline-block;
	}

	header nav {
		display: table-cell;
		text-align: center;
		vertical-align: middle;
	}

	header nav li {
		margin: 0 27px;
		display: inline-block;
	}

	header nav li a {
		font-size: 14px;
		color: #999;
	}

	header .h-icon {
		display: table-cell;
		vertical-align: middle;
		width: 287px;
		text-align: right;
	}

	header .h-icon span {
		display: inline-block;
		position: relative;
		margin-left: 26px;
		font-size: 24px;
		color: rgb(141, 144, 149);
	}

	footer {
		background-color: #25211e;
	}

	.f-content {
		width: 1024px;
		margin: 0 auto;
		padding: 60px 0;
		display: flex;
		border-bottom: 1px solid rgba(73, 73, 73, 1);
		margin-bottom: 20px;
	}

	.f-content-item {
		width: 25%;
		padding: 0 5px;
		box-sizing: border-box;
		flex: 1;
	}

	.f-c-title p:first-of-type {
		color: #d3d3d3;
		font-size: 18px;
		margin-bottom: 10px;
	}

	.f-c-title p:last-of-type {
		color: #a9a9a9;
		font-size: 13px;
		line-height: 1.5em;
		margin-bottom: 10px;
	}

	.f-c-content {
		color: #bbb;
		font-size: 12px;
		line-height: 24px;
		width: 190px;
	}

	.f-c-content img {
		width: 102px;
		height: 102px;
	}

	.f-c {
		color: #9e9e9e;
		font-size: 12px;
		line-height: 24px;
		padding-bottom: 20px;
		text-align: center;
	}
</style>
