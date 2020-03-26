<template>
  <div id="no3">
    <div style="background-color:rgba(0,0,0,1)">
      <backs style="background-image:url(http://57183664a0620.t74.qifeiye.com/qfy-content/uploads/2016/01/fb854112a4654be1041345b1e266d12a.jpg);opacity:0.6; filter: alpha(opacity=60);">
      </backs>
    </div>
    <div>
      <div style="text-align:center;padding-top:100px;padding-bottom:30px;">
        <h5 style="font-family: 微軟正黑體;letter-spacing: 5px;font-size: 36px;font-weight:normal;">精选案例</h5>
        <p style="color: #808080;font-family: lucida sans unicode;letter-spacing: 2px;font-size: 18px;">Selected Case Of Photography</p>
      </div>
    </div>
    <div class="jingxuan">
      <el-image :src="i" alt="" v-for="i in img_arr" style="width:25%;"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  name: 'no3',
  data() {
    return {
      img_arr:["https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDQvNzU2OTRkNTJmYTIzZTE3MmJjZTk0YzdlZGVhODNiOTctNjAweDQwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvMmY3ZWI5NmJkNGY4MWQyYzY1ZmI0ZjM4YzA5YjBhYjEtNjAweDQwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvMTQ2MjQxNDI0MjU3MmFhYmEyZTcxMTYzNTUzLTYwMHg0MDAtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvMTQ2MjQyMDQzNzU3MmFjM2Q1MjA0MmYxNjYyLTYwMHg0MDAtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvNjgxZTJiOTFkMTg2ZWM4OTA1ZWMyMTM0NTg0MzM3YmItNjAweDQwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvNTRjODFhNDE0OWE4NmViNTQ2OTkyNGIyZTNmNGJhMjQtNjAweDQwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvNzQ3ZWY0ODI3ZThkOTZjMzFmZWViMWRhOWY0MjZlODEtNjAweDQwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvYmVjZDA4ODJlMWVhNGJkOTVhZmY0YmFlNWZhMzE1ZWEtNjAweDQwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvYTM0MGVhMTNlNDBlYjBhZDZlNjNhOWJhYjBiZTQxMWMtNjAweDQwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvYzhiODJkYTc5ZTYxYjA5NWIyYWFhODY4ZTlkYmUzNWItNjAweDQwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvZDE2YjZmZTRhNzQ5ZTcyYWM1N2ExOGFkZTJjOGE3NmMtNjAweDQwMC05MC53ZWJw.webp","https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvZjYwNzNmMDA4MGY1ZGFmODc3Y2E5ZDlkNzliZDQzMWEtNjAweDQwMC05MC53ZWJw.webp"]
    }
  }
}

</script>

<style>

.jingxuan{
  display:flex;
  flex-wrap:wrap;
}

.jingxuan img {
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

.jingxuan img:hover {
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