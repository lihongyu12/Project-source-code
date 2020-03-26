<template>
	<div style="height: 28.2519rem;">
		<headers>
			<span slot="tite">通讯录</span>
			<i class="iconfont" slot="icon1" style="float: right;margin-left: 1.481481rem;">&#xe6ac;</i>
			<i class="iconfont" slot="icon2" style="float: right;">&#xe63a;</i>
		</headers>
		<div class="content" style="height: 26.311111rem;">
			<div style="height: 26.311111rem;">
				<friend>
					<div class="friend-img" style="background-color: #fa9d3d;" slot="friend-img">
						<i class="iconfont" style="font-size: 0.622222rem;">&#xe6dc;</i>
					</div>
					<span slot="friend-name" class="friend-name">新的朋友</span>
				</friend>
				<friend>
					<div class="friend-img" style="background-color: #07c062;" slot="friend-img">
						<i class="iconfont" style="font-size: 0.622222rem;">&#xe6dc;</i>
					</div>

					<span slot="friend-name" class="friend-name">群聊</span>
				</friend>
				<friend>
					<div class="friend-img" style="background-color: #2781d9;" slot="friend-img">
						<i class="iconfont" style="font-size: 0.622222rem;">&#xe627;</i>
					</div>

					<span slot="friend-name" class="friend-name">标签</span>
				</friend>
				<friend>
					<div class="friend-img" style="background-color: #2781d9;" slot="friend-img">
						<i class="iconfont" style="font-size: 0.622222rem;">&#xe64d;</i>
					</div>

					<span slot="friend-name" class="friend-name">公众号</span>
				</friend>
			
				<mt-index-list style="overflow: visible;">
					<mt-index-section index="A">
						<friend>
							<div class="friend-img" slot="friend-img">
								<img src="http://5b0988e595225.cdn.sohucs.com/images/20171114/0fc43e9ad58f4a5cb41a018925b0e475.jpeg" style="border-radius: 0.162962rem;width: 100%;height: 100%;;"
								 alt="">
							</div>
							<span slot="friend-name" class="friend-name">Ak47</span>
						</friend>
					</mt-index-section>
					<mt-index-section index="D">
						<friend>
							<div class="friend-img" slot="friend-img">
								<img src="http://img5.imgtn.bdimg.com/it/u=295603506,4001835561&fm=26&gp=0.jpg" style="border-radius: 0.162962rem;width: 100%;height: 100%;;"
								 alt="">
							</div>
							<span slot="friend-name" class="friend-name">第一个好友</span>
						</friend>
						<friend>
							<div class="friend-img" slot="friend-img">
								<img src="http://img5.imgtn.bdimg.com/it/u=3070585544,3060736657&fm=26&gp=0.jpg" style="border-radius: 0.162962rem;width: 100%;height: 100%;;"
								 alt="">
							</div>
							<span slot="friend-name" class="friend-name">第二个好友</span>
						</friend>
					</mt-index-section>
					<mt-index-section index="Z">
						<friend>
							<div class="friend-img" slot="friend-img">
								<img src="http://img3.imgtn.bdimg.com/it/u=1912113785,1587702892&fm=26&gp=0.jpg" style="border-radius: 0.162962rem;width: 100%;height: 100%;;"
								 alt="">
							</div>
							<span slot="friend-name" class="friend-name">在人间</span>
						</friend>
					</mt-index-section>
				</mt-index-list>
			</div>
		</div>
	</div>
</template>
<style>
	.friend-name {
		font-size: 0.592592rem;
		line-height: 1.629629rem;
	}

	.mint-indexlist-content{
		overflow: visible !important;
	}
</style>
