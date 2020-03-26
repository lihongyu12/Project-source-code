<template>
	<div class="friend clearfix">
		<slot class="friend-img"  name="friend-img">
		</slot>
		<div style="float: right;border-bottom: 1px solid #CCCCCC;width: 12.888888rem;padding-bottom: 0.651851rem;">
			<slot name="friend-name"></slot>
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
	.friend {
		box-sizing: border-box;
		padding: 0.296296rem 0.592592rem;
		padding-right: 0px;
	}

	.friend-img {
		width: 1.6rem;
		height: 1.6rem;
		float: left;
		color: #fff;
		border-radius: 0.162962rem;
		text-align: center;
	}
	
</style>
