<template>
	<div class="news clearfix">
		<div class="news-img" style="float: left;">
			<slot name="user-img"></slot>
			
		</div>
		<div style="float: right;border-bottom: 1px solid #CCCCCC;width: 12.888888rem;padding-bottom: 0.651851rem;">
			<slot name="user-name"></slot>
			<slot name="user-news"></slot>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.clearfix::before,.clearfix::after{
		content: "";
		display: block;
	}
	.clearfix::after{
		clear: both;
	}
	.news{
		box-sizing: border-box;
		padding: 0.444444rem 0.592592rem;
		padding-right: 0px;
	}
	.news-img{
		width: 1.925925rem;
		height: 1.925925rem;
		line-height:1.925925rem;
		text-align: center;
	}
	.news-img img{
		width: 100%;
		border-radius: 0.162962rem;
	}
</style>
