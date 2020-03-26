<template>
  <div style="background-color: #e7e7e7;;padding-top: 80px;min-height: 1000px;">
    <div style=" max-width: 1280px;margin: 0 auto">
      <div style="display: flex;">
        <div style="width: 70%; flex: 0.75;">
          <div class="clearfix">
            <div style="float: left;">
              <div style="position: relative;display: inline-block;width: 428px;height: 428px;" @mouseover.self="shows=true" @mouseout.self="shows=false">
                <div id="show">
                  <img style="width: 100%;" :src="set_data?set_data.img:''" alt="">
                </div>
                <div v-show="shows" id="showbox">
                </div>
              </div>
            </div>
            <div style="float: left;width: 428px;box-sizing: border-box;padding-left: 40px;">
              <h5 style="font-size: 16px;font-weight: bold;color: #282828;font-family: 微软雅黑;margin-bottom: 20px;">
                {{set_data?set_data.title:''}}
              </h5>
              <span></span>
              <p style="margin-bottom: 20px;font-size: 32px;font-weight: normal;color: #191919;font-family: Open Sans Condensed;line-height: 32px;">
                ¥&nbsp;<span>{{set_data?set_data.money:''}}</span>
              </p>
              <div style="margin-bottom: 20px;">
                <a href="#/shoping" style="display: inline-block;" @click="push_shopings(json),open1()">
                  <el-button plain class="join">
                    加入购物车
                  </el-button>
                </a>
                <button type="button" class="jian" @click="num<=1?num=1:num--">-</button><button type="button" class="shu">{{num}}</button><button type="button" class="jia" @click="num++">+</button>
              </div>
              <p style="line-height: 24px;font-size: 12px;font-weight: normal;color: #777777;font-family: 微软雅黑;border-top:1px solid #ddd ;border-bottom:1px solid #ddd ;">商品编号:<span style="margin-left: 10px;">{{set_data?set_data.id:''}}</span></p>
              <p style="line-height: 24px;font-size: 12px;font-weight: normal;color: #777777;font-family: 微软雅黑;">分类:<span style="color: #bcb593;margin-left: 10px;">{{set_data?set_data.type:''}}</span></p>
            </div>
          </div>
          <div style="margin-top: 30px;border-top: 1px solid #eee;">
            <p style="font-size: 14px;font-weight: bold;color: #555555;font-family: 微软雅黑;line-height: 3em;">相关商品</p>
            <div style="display: flex;text-align: center;">
              <div style="flex: 1;" v-for="i in jieshou">
                <a :href="i.href" style="display: block;">
                  <img style="width: 100%;" :src="i.img" alt="">
                </a>
                <p style="margin-bottom: 6px;font-size: 11px;font-weight: normal;color: #888888;font-family: 微软雅黑;"><span>{{i.title}}</span></p>
                <p style="font-size: 18px;font-weight: normal;color: #000000;font-family: Open Sans Condensed;">¥ {{i.money}}</p>
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex;flex-wrap:wrap ;text-align: center;flex: 0.25;">
          <div style="padding:0px 30px;box-sizing: border-box;margin: 0px 30px;border-left: 1px solid rgba(219,219,219,1);border-right: 1px solid rgba(219,219,219,1)">
            <div style="flex: 1;" v-for="i in arr">
              <a style="display: block;" :href="i.href">
                <img :src="i.img" width="100%" alt="">
              </a>
              <p style="font-size: 11px;font-weight: normal;color: #888888;font-family: 微软雅黑;">{{i.title}}</p>
              <p style="font-size: 18px;font-weight: normal;color: #000000;font-family: Open Sans Condensed;">￥{{i.money}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {

  activated() {
      this.num = 1
      this.json = eval('(' + JSON.stringify(this.set_data) + ')')
      this.$set(this.json, 'num', this.num)
      if (this.set_random) {
        this.jieshou = eval('(' + JSON.stringify(this.set_random) + ')')
      }
      this.jieshou.splice(this.set_index, 1)
      this.jieshou.sort(function() {
        return Math.random() - Math.random();
      })
      this.jieshou.splice(0, 1)
    

  },
  computed: {
    ...mapGetters(['set_data', 'set_random', 'set_index','shoping_data1'])
  },
  watch: {
    num(a, b) {
      this.$set(this.json, 'num', a)
    },
    shoping_data1(a,b){
      this.shoping_data3(a)
      console.log(this.shoping_data3(a))
    }
  },
  methods: {
    ...mapActions(['a_arr', 'random_arr', 'random_indexs', 'data_arrs', 'push_shopings','shoping_data3']),
    open1() {
      this.$notify({
        title: '成功',
        message: '添加成功',
        type: 'success'
      });
    }
  },
  data() {
    return {
      json: '',
      arrs:[],
      num: 1,
      shows: false,
      jieshou: [{
          type: "外套",
          money: "2,695.00",
          id: "003073",
          href: "#/show/003073",
          title: "Letchover 女士休闲夹克01",
          img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvMWU5OThjODhmYzhkZDYyNmY2MmFhYzg5ZWZmMjg3NzAtMjgweDI4MC05MC53ZWJw.webp"
        },
        {
          type: "外套",
          money: "2,695.00",
          id: "003074",
          href: "#/show/003074",
          title: "Letchover 女士休闲夹克02",
          img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvNzg1NGI4OWZkNTM4MjliMGYxOTE3YzNjMjY4OTNiZTgtMjgweDI4MC05MC53ZWJw.webp"
        },
        {
          type: "外套",
          money: "2,695.00",
          id: "003075",
          href: "#/show/003075",
          title: "Letchover 女士休闲夹克03",
          img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvYjI5ZjZhYjJiYmVlNmM0MmY1Y2RlMGFlNzhmN2JlYzktMjgweDI4MC05MC53ZWJw.webp"
        },
        {
          type: "外套",
          money: "2,695.00",
          id: "003076",
          href: "#/show/003076",
          title: "Letchover 女士休闲夹克04",
          img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvMTNmNGNhZDUzNzk4NjU0Y2E0YTM3YzQ2NDJlNDllOGMtMjgweDI4MC05MC53ZWJw.webp"
        }
      ],
      arr: [{
          type: "外套",
          money: "2,695.00",
          id: "003073",
          href: "#/show/003073",
          title: "Letchover 女士休闲夹克01",
          img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvMWU5OThjODhmYzhkZDYyNmY2MmFhYzg5ZWZmMjg3NzAtMjgweDI4MC05MC53ZWJw.webp"
        },
        {
          type: "外套",
          money: "2,695.00",
          id: "003074",
          href: "#/show/003074",
          title: "Letchover 女士休闲夹克02",
          img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvNzg1NGI4OWZkNTM4MjliMGYxOTE3YzNjMjY4OTNiZTgtMjgweDI4MC05MC53ZWJw.webp"
        },
        {
          type: "外套",
          money: "2,695.00",
          id: "003075",
          href: "#/show/003075",
          title: "Letchover 女士休闲夹克03",
          img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvYjI5ZjZhYjJiYmVlNmM0MmY1Y2RlMGFlNzhmN2JlYzktMjgweDI4MC05MC53ZWJw.webp"
        },
        {
          type: "外套",
          money: "2,695.00",
          id: "003076",
          href: "#/show/003076",
          title: "Letchover 女士休闲夹克04",
          img: "https://ccdn.goodq.top/caches/6cb70c11d7924995c4268c57fc3cb083/aHR0cHM6Ly81OGJmOTlmMWNlMjY5LnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTAvMTNmNGNhZDUzNzk4NjU0Y2E0YTM3YzQ2NDJlNDllOGMtMjgweDI4MC05MC53ZWJw.webp"
        }
      ]
    }
  }
}

</script>
<style>
.jian,
.jia,
.shu {
  color: #666;
  font-family: "微软雅黑", Helvetica, Arial, Verdana, sans-serif;
  border: none;
  outline: none;
  border: 1px solid #666;
  width: 34px;
  height: 40.8px;
  cursor: pointer;
  background-color: transparent;
}

.join {
  display: inline-block;
  -ms-user-select: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: normal;
  color: #ffffff !important;
  font-family: 微软雅黑;
  border-color: #bcb593 !important;
  background-color: #bcb593 !important;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 80px;
  padding-right: 80px;
  border-radius: 0px;
}

.join:hover {
  background-color: rgb(201, 194, 167) !important;
}

#show {
  position: absolute;
  width: 428px;
  height: 428px;
  left: 0px;
  top: 0px;
}

#showbox {
  position: absolute;
  width: 428px;
  height: 428px;
  right: -428px;
  top: 0px;
  border: 1px solid #ccc;
}

</style>
