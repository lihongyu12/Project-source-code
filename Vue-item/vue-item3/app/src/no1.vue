<template>
  <div id="no1">
    <backs style="background-image:url(https://57183664a0620.t74.qifeiye.com/qfy-content/uploads/2016/05/d16b6fe4a749e72ac57a18ade2c8a76c.jpg);"></backs>
    <div class="no1-txt">
      <h5>影像案例欣赏</h5>
      <p>无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。想创建一个简单的单页式站点，还是一个专业的公司网站，亦或是一个别具一格的博客？起飞页可以满足您的所有需求。您只需在模板上进行少量修改，即可完成自己的网站。起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件…</p>
      <div><a href="">More INFO</a></div>
    </div>
    <div>
      <div class="no1-img">
        <el-image src="https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvYmVjZDA4ODJlMWVhNGJkOTVhZmY0YmFlNWZhMzE1ZWEtODAweDgwMC05MC53ZWJw.webp" style="flex:1;width:33.33%"></el-image>
        <el-image src="https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvNTRjODFhNDE0OWE4NmViNTQ2OTkyNGIyZTNmNGJhMjQtODAweDgwMC05MC53ZWJw.webp" style="flex:1;width:33.33%"></el-image>
        <el-image src="https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvYzhiODJkYTc5ZTYxYjA5NWIyYWFhODY4ZTlkYmUzNWItODAweDgwMC05MC53ZWJw.webp" style="flex:1;width:33.33%"></el-image>
        <!-- <img src="https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvNTRjODFhNDE0OWE4NmViNTQ2OTkyNGIyZTNmNGJhMjQtODAweDgwMC05MC53ZWJw.webp" alt="">
        <img src="https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvYzhiODJkYTc5ZTYxYjA5NWIyYWFhODY4ZTlkYmUzNWItODAweDgwMC05MC53ZWJw.webp" alt=""> -->
      </div>
    </div>
    <div class="no1-txt">
      <h5>拥有一个网站，或者仅是尝试一下新的想法！</h5>
      <p>双击这里或者点击编辑按钮修改文本内容，您可以添加图标按钮图片等常用元素，还可以为下方幽灵按钮添加相应的超链接</p>
      <div><a href="">More INFO</a></div>
    </div>
    <div class="no1-img2">
      <el-image style="width:16.6666%;" v-for="i in no1img_arr" :src="i" alt=""></el-image>
    </div>
  </div>
</template>
<script>
export default {
  name: 'no1',
  data() {
    return {
        no1img_arr:["https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvZDE2YjZmZTRhNzQ5ZTcyYWM1N2ExOGFkZTJjOGE3NmMtNDAweDMwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvMTQ2MjQxNDI0MjU3MmFhYmEyZTcxMTYzNTUzLTQwMHgzMDAtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvYzhiODJkYTc5ZTYxYjA5NWIyYWFhODY4ZTlkYmUzNWItNDAweDMwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvZjYwNzNmMDA4MGY1ZGFmODc3Y2E5ZDlkNzliZDQzMWEtNDAweDMwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvNTRjODFhNDE0OWE4NmViNTQ2OTkyNGIyZTNmNGJhMjQtNDAweDMwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvYmVjZDA4ODJlMWVhNGJkOTVhZmY0YmFlNWZhMzE1ZWEtNDAweDMwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvMTQ2MjQyMDQzNzU3MmFjM2Q1MjA0MmYxNjYyLTQwMHgzMDAtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDQvNzU2OTRkNTJmYTIzZTE3MmJjZTk0YzdlZGVhODNiOTctNDAweDMwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvZWVjNTljODQxMGU0YjZjODM4ZjVkNjJlNjU3ZTVlNmUtNDAweDMwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDQvZmNiZTg4ZTk3NmUwMTc2ZDU2MjhmYmQxNWFkMGJlN2EtNDAweDMwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvMDM3OTRiM2JhZmIzODJjMjdhZjBjNjI5MDk1Mzg5MDYtNDAweDMwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvNzQ3ZWY0ODI3ZThkOTZjMzFmZWViMWRhOWY0MjZlODEtNDAweDMwMC05MC53ZWJw.webp"]
    }
  },
  components: {

  }
}

</script>
<style>
.no1-txt {
  background-color: #000;
  height: 404px;
  text-align: center;
  box-sizing: border-box;
  padding: 100px 230px 0px;
}

.no1-txt h5 {
  font-family: 微軟正黑體;
  font-size: 22px;
  font-weight: normal;
  color: #D3D3D3;
  margin-bottom: 20px;
}

.no1-txt p {
  color: #A9A9A9;
  line-height: 2em;
  font-size: 14px;
  letter-spacing: 1px;
}

.no1-txt>div a {
  display: inline-block;
  width: 118px;
  height: 38px;
  box-sizing: border-box;
  font-family: "trebuchet ms";
  font-size: 14px;
  border: 2px solid #fff;
  text-align: center;
  border-radius: 4px;
  line-height: 38px;
  color: #A9A9A9;
  margin-top: 50px;
}

.no1-img {
  display: flex;
  width: 100%;
}

.no1-img img {
  flex: 1;

}

.no1-img2 {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.no1-img2 img {
  display:block;
 
  filter: grayscale(100%); 
  -webkit-filter: grayscale(100%); 
  -moz-filter: grayscale(100%); 
  -ms-filter: grayscale(100%); 
  -o-filter: grayscale(100%); 
  -webkit-transition: all 0.5s ease-in-out; 
  -o-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  
}

.no1-img2 img:hover {
  filter: grayscale(0%); 
  -webkit-filter: grayscale(0%); 
  -moz-filter: grayscale(0%); 
  -ms-filter: grayscale(0%); 
  -o-filter: grayscale(0%); 
  -webkit-transition: all 0.5s ease-in; 
  -o-transition: all 0.5s ease-in;
  -moz-transition: all 0.5s ease-in;
  -ms-transition: all 0.5s ease-in;
}



</style>
