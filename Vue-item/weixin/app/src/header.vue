<template>
	<div class="header">
		<slot name="tite"></slot>
		<slot name="icon1" ></slot>
		<slot name="icon2" ></slot>
	</div>
</template>

<script>
</script>

<style>
	.header i{
		font-size: 0.74074rem;
	}
	.header{
		position: absolute;
		top: 0px;
		height: 1.925925rem;
		background-color: #efefef;
		width: 100%;
		line-height: 1.925925rem;
		color: #000000;
		font-size: 0.681481rem;
		box-sizing: border-box;
		padding-left: 0.592592rem;
		padding-right: 0.592592rem;
	}
</style>
