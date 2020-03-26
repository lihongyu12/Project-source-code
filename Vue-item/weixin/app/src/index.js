(function () {
        var  styleN = document.createElement("style");
        var width = document.documentElement.clientWidth/16;
        styleN.innerHTML = 'html{font-size:'+width+'px!important}';
        document.head.appendChild(styleN);
    })();
app.style.height=window.screen.height


import headers from './header.vue'
import news from './news.vue'
import friend from './friend.vue'
var index = {
	install(Vue){
		Vue.component('headers',headers)
		Vue.component('news',news)
		Vue.component('friend',friend)
	}
}
export default index