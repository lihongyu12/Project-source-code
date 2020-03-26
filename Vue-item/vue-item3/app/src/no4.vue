<template>
  <div id="no4">
    <backs style="background-image:url(https://57183664a0620.t74.qifeiye.com/qfy-content/uploads/2016/05/d16b6fe4a749e72ac57a18ade2c8a76c.jpg);"></backs>
    <div style="text-align:left;margin-left:20%;margin-right:20%;font-family: 微軟正黑體, Helvetica, Arial, Verdana, sans-serif;" v-if="info" @click="info=!info">
      <div v-for="i in new_arr" style="border-bottom:1px solid #ccc;padding-top:20px;padding-bottom:20px;">
        <h5><a :href="i.href" style="color: #777777;font-size: 24px;font-weight:normal;line-height:2em;">{{i.tit}}</a></h5>
        <p style="color: #828282;font-size: 12px;line-height:1.5em;"><time>{{i.time}}</time></p>
        <p style="color: #828282;font-size: 12px;line-height:1.5em;">{{i.content}}</p>
        <div style="text-align:right;margin-top:20px;"><a :href="i.href" style="color: #809fbf;font-size: 16px;font-family:'å¾®è»Ÿæ­£é»‘é«”',Helvetica,Arial,Verdana,sans-serif;">阅读正文</a></div>
      </div>
    </div>
    <!-- <lists ></lists>  -->
    <div style="margin:20px 20%;" v-if="!info">
    <div>
      <h5 style="font-size: 22px;font-weight: normal;line-height:2em;">{{$route.params.page}}</h5>
      <p style="color:#999;font-size: 14px;line-height:4em;font-family:'å¾®è»Ÿæ­£é»‘é«”',Helvetica,Arial,Verdana,sans-serif;"><time>2017-04-06 09:28</time></p>
      <p style="font-size:14px;line-height:1.5em;color: #666666;margin-bottom:20px;letter-spacing:1px;    font-family: 微軟正黑體, Helvetica, Arial, Verdana, sans-serif;">起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一套安全、稳定、不揪心的自助建站系统：在这里，您只需打字传图、用鼠标自由拖拽，便可在弹指间做出极具专业级别的网站。我们以全球首创的网页线性布局方案和傻瓜式图文编辑为核心，研发出这种颠覆传统的响应式网站制作方式，可以为您节约90%的建站时间。起飞页是苏州卡达网络科技有限公司旗下的一款杀手级产品。起飞页的工作团队是一群热爱互联网及软件事业的大伙伴和小伙伴，经验丰富、成熟稳定，基于对网站出版行业的热爱、对人人都能做出精美网站的向往，公司投入一千万元人民币，历时两年时间打造出起飞页平台。截至2015年底，在起飞页上创建的网站已超过10万+。</p>
      <p style="font-size:14px;line-height:1.5em;color: #666666;margin-bottom:20px;letter-spacing:1px;    font-family: 微軟正黑體, Helvetica, Arial, Verdana, sans-serif;">起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一套安全、稳定、不揪心的自助建站系统：在这里，您只需打字传图、用鼠标自由拖拽，便可在弹指间做出极具专业级别的网站。我们以全球首创的网页线性布局方案和傻瓜式图文编辑为核心，研发出这种颠覆传统的响应式网站制作方式，可以为您节约90%的建站时间。起飞页是苏州卡达网络科技有限公司旗下的一款杀手级产品。起飞页的工作团队是一群热爱互联网及软件事业的大伙伴和小伙伴，经验丰富、成熟稳定，基于对网站出版行业的热爱、对人人都能做出精美网站的向往，公司投入一千万元人民币，历时两年时间打造出起飞页平台。截至2015年底，在起飞页上创建的网站已超过10万+。
      </p>
      <div>
        <img src="https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cDovLzU3MTgzNjY0YTA2MjAudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wNS9kMTZiNmZlNGE3NDllNzJhYzU3YTE4YWRlMmM4YTc2Yy5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD05NTA2.jpg" alt="" width="100%">
      </div>
      <div style="tetx-align:center;margin-top:40px;">
        <a href="#/no4/list" class="hov" @click="info=!info">返回首页</a>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import lists from './no2tit.vue'
export default {
  name: 'no4',
  data() {
    return {
      info:true,
      new_arr: [{ href:"#/no4/当剪纸遇上建筑 男子创意摄影玩坏全球地标",tit: "当剪纸遇上建筑 男子创意摄影玩坏全球地标", content: "起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一套安全、稳定、不揪心的自助建站系统：在这里，您只需打字传图、用鼠标自由拖拽，便可在弹指间做出极具专业级别的网站。我们以全球首创的网页线性布局方案和傻瓜式图文编辑为核心，研发出这种颠覆传统的响应式网站制作方式，可以为您节约90%的建站时间。", time: "发布日期：2017-04-06" }, { href:"#/no4/国际婚纱摄影大赛作品展示最美婚纱照",tit: "国际婚纱摄影大赛作品展示最美婚纱照", content: "起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一套安全、稳定、不揪心的自助建站系统：在这里，您只需打字传图、用鼠标自由拖拽，便可在弹指间做出极具专业级别的网站。我们以全球首创的网页线性布局方案和傻瓜式图文编辑为核心，研发出这种颠覆传统的响应式网站制作方式，可以为您节约90%的建站时间。", time: "发布日期：2017-04-06" }, { href:"#/no4/一次又一次,漫长而深入的拍摄",tit: "一次又一次,漫长而深入的拍摄", content: "起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一套安全、稳定、不揪心的自助建站系统：在这里，您只需打字传图、用鼠标自由拖拽，便可在弹指间做出极具专业级别的网站。我们以全球首创的网页线性布局方案和傻瓜式图文编辑为核心，研发出这种颠覆传统的响应式网站制作方式，可以为您节约90%的建站时间。", time: "发布日期：2017-04-06" }, { href:"#/no4/“爱心摄影”为老人拍照",tit: "“爱心摄影”为老人拍照", content: "起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一套安全、稳定、不揪心的自助建站系统：在这里，您只需打字传图、用鼠标自由拖拽，便可在弹指间做出极具专业级别的网站。我们以全球首创的网页线性布局方案和傻瓜式图文编辑为核心，研发出这种颠覆传统的响应式网站制作方式，可以为您节约90%的建站时间。", time: "发布日期：2017-04-06" }]
    }
  },
  components:{lists}
}

</script>
<style>

.hov{
    width: 98px;
    height: 48px;
    display: block;
    margin:auto;
    text-align: center;
    line-height: 44px;
    border:2px solid #000;
    color: #000;
    -webkit-transition: all 0.3s ease-out;  /* Saf3.2+, Chrome */
       -moz-transition: all 0.3s ease-out;  /* FF4+ */
        -ms-transition: all 0.3s ease-out;  /* IE10? */
         -o-transition: all 0.3s ease-out;  /* Opera 10.5+ */
            transition: all 0.3s ease-out;
            box-sizing: border-box;
  }
  .hov:hover{
    background-color: #000;
    color: #fff;
  }
</style>
