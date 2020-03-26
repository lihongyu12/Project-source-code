<template>
  <div id="app">

          <div class="header">
            <div class="nav">
              <span><a href="#/">|&nbsp;首页&nbsp;|</a></span>
              <span><a href="#/no2">|&nbsp;关于&nbsp;|</a></span>
              <span><a href="#/no3">|&nbsp;案例&nbsp;|</a></span>
              <span><a href="#/no4/list">|&nbsp;活动&nbsp;|</a></span>
              <span><a href="#/no5">|&nbsp;联系&nbsp;|</a></span>
            </div>
            <div style="text-align:center;">
              <img src="https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvMjliNmFkZjViZDEzOWE5YTA1MjJkYTZjMjAyOTczZDUtMTk4eDEyNy05MC53ZWJw.webp" alt="">
            </div>
          </div>
          <div class="cont">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>

          <div class="foot" style="text-align:center;line-height:60px;font-size:13px;color:#696969;">
              Copyright © 2010 - 2016 影像工作室
          </div>
<!--           <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
  </div>

</template>
<script>

export default {
  name: 'app',
  data() {
    return {

    }
  }
}

</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  user-select:none;
}

.header {
  text-align: center;
  position: absolute;
  width: 100%;
  top: 0px;
  z-index:99999;
}

.nav {
  display: flex;
  margin: 150px 450px;
}

.header span {
  flex: 1;
}

.header span a {
  color: #d8d8d8;
  font-size: 13px;
}

</style>
