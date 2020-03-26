<template>
  <div id="no5">
    <backs style="background-image:url(http://57183664a0620.t74.qifeiye.com/qfy-content/uploads/2016/05/c8b82da79e61b095b2aaa868e9dbe35b.jpg);"></backs>
	<div style="margin:20px 130px;">
    		<iframe src="https://map.baidu.com/@12748538.99,4559724.44,12z" width="100%"height="500px;"></iframe>
   	</div>
    <div class="lianxi">
    	
      <div style="margin-right:25px;" class="left">
        <div style="font-family: 宋体;font-size:14px;letter-spacing: 1px;line-height:1.5em;">
          <span style="">温习提示：</span>使用表单之前需要配置表单的收件邮箱和网站的发件邮箱。详情参见教程<a href="https://www.qifeiye.com/%E5%A6%82%E4%BD%95%E8%AE%BE%E7%BD%AE%E8%A1%A8%E5%8D%95%E4%B8%AD%E7%9A%84%E9%82%AE%E7%AE%B1%EF%BC%9F/" style="color:rgb(255, 0, 0);">《如何设置表单中的邮箱》</a>
        </div>
        <div>
          <p>姓名</p>
          <input type="text" style="width:100%;height: 35px;font-size: 14px;border: solid 1px #CCC;padding: 2px;box-shadow: 0 1px 1px rgba(0,0,0,0.075) inset;">
        </div>
        <div>
          <p>联系电话</p>
          <input type="text" rows="3" cols="25" style="width:100%;height: 35px;font-size: 14px;border: solid 1px #CCC;padding: 2px;box-shadow: 0 1px 1px rgba(0,0,0,0.075) inset;">
        </div>
        <div>
          <p>内容</p>
          <textarea name="" id="" style="width:100%;height:100px;font-size: 14px;border: solid 1px #CCC;padding: 2px;box-shadow: 0 1px 1px rgba(0,0,0,0.075) inset;resize:none;max-width: 100% !important;"></textarea>
        </div>
        <div>
          <p>验证码</p>
          <input type="text" style="width:100%;height: 35px;font-size: 14px;border: solid 1px #CCC;padding: 2px;box-shadow: 0 1px 1px rgba(0,0,0,0.075) inset;">
          <div>
          	<img :src="yanzheng[num]" alt="" @click="sui()">
          </div>
          <div>
          	<span style="display:block;width:98px;line-height:48px;background-color:#000;color:#fff;text-align:center;margin:20px 0px 0px;
          	">提交</span>
          </div>
        </div>
      </div>
      <div style="margin-left:25px;" class="right">
        <p>
          地址：蘇州市園區金雞湖大道00號佘山林荫大道18号
        </p>
        <p>电话：400-000-5000</p>
        <p>传真：0500-60000000</p>
        <p>邮箱： yishujia_123@100.com</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'no5',
  data() {
    return {
      
      yanzheng:["https://57183664a0620.t74.qifeiye.com/qfy-content/plugins/qfy_form/includes/captcha.php?qfy_nocache=true&c=eyJ1bmlxSWQiOiI1ZTA0MTg5MTQwMjZmIiwidG1wRGlyIjoiXC90bXBcLyIsIm9wdGlvbnMiOnsibGVuZ3RoIjoiNSIsIndpZHRoIjoiMTE1IiwiaGVpZ2h0IjoiNDAiLCJiZ0NvbG91ciI6IiNGRkZGRkYiLCJ0ZXh0Q29sb3VyIjoiIzIyMjIyMiIsImZvbnQiOiJUeXBpc3QudHRmIiwibWluRm9udFNpemUiOiIxMiIsIm1heEZvbnRTaXplIjoiMTkiLCJtaW5BbmdsZSI6IjAiLCJtYXhBbmdsZSI6IjIwIn19&t=1577328738698","https://57183664a0620.t74.qifeiye.com/qfy-content/plugins/qfy_form/includes/captcha.php?qfy_nocache=true&c=eyJ1bmlxSWQiOiI1ZTA0MTg5MTQwMjZmIiwidG1wRGlyIjoiXC90bXBcLyIsIm9wdGlvbnMiOnsibGVuZ3RoIjoiNSIsIndpZHRoIjoiMTE1IiwiaGVpZ2h0IjoiNDAiLCJiZ0NvbG91ciI6IiNGRkZGRkYiLCJ0ZXh0Q29sb3VyIjoiIzIyMjIyMiIsImZvbnQiOiJUeXBpc3QudHRmIiwibWluRm9udFNpemUiOiIxMiIsIm1heEZvbnRTaXplIjoiMTkiLCJtaW5BbmdsZSI6IjAiLCJtYXhBbmdsZSI6IjIwIn19&t=1577327848372","https://57183664a0620.t74.qifeiye.com/qfy-content/plugins/qfy_form/includes/captcha.php?qfy_nocache=true&c=eyJ1bmlxSWQiOiI1ZTA0MTg5MTQwMjZmIiwidG1wRGlyIjoiXC90bXBcLyIsIm9wdGlvbnMiOnsibGVuZ3RoIjoiNSIsIndpZHRoIjoiMTE1IiwiaGVpZ2h0IjoiNDAiLCJiZ0NvbG91ciI6IiNGRkZGRkYiLCJ0ZXh0Q29sb3VyIjoiIzIyMjIyMiIsImZvbnQiOiJUeXBpc3QudHRmIiwibWluRm9udFNpemUiOiIxMiIsIm1heEZvbnRTaXplIjoiMTkiLCJtaW5BbmdsZSI6IjAiLCJtYXhBbmdsZSI6IjIwIn19&t=1577328777526","https://57183664a0620.t74.qifeiye.com/qfy-content/plugins/qfy_form/includes/captcha.php?qfy_nocache=true&c=eyJ1bmlxSWQiOiI1ZTA0MTg5MTQwMjZmIiwidG1wRGlyIjoiXC90bXBcLyIsIm9wdGlvbnMiOnsibGVuZ3RoIjoiNSIsIndpZHRoIjoiMTE1IiwiaGVpZ2h0IjoiNDAiLCJiZ0NvbG91ciI6IiNGRkZGRkYiLCJ0ZXh0Q29sb3VyIjoiIzIyMjIyMiIsImZvbnQiOiJUeXBpc3QudHRmIiwibWluRm9udFNpemUiOiIxMiIsIm1heEZvbnRTaXplIjoiMTkiLCJtaW5BbmdsZSI6IjAiLCJtYXhBbmdsZSI6IjIwIn19&t=1577328786062"],
      num:0
    }
  },
  methods:{
  	sui(){
  		this.num=parseInt(Math.random()*this.yanzheng.length)
  	}
  }
}

</script>
<style>
.lianxi {
  display: flex;
  margin: 50px 100px 100px;
}

.lianxi>div {
  flex: 1;
}

.left p {
  color: rgb(148, 148, 148);
  font-size: 13px;
  line-height: 2em;
}

.left>div {
  margin: 10px 0px;
}
.right {
	font-size:14px;
	line-height:3.5em;
	color: rgb(128, 128, 128);
	font-family: 宋体;
}

</style>
