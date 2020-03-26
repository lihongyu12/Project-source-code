import Vue from 'vue'
import Router from 'vue-router'
import no1 from './no1.vue'
import no2 from './no2.vue'
import no3 from './no3.vue'
import no4 from './no4.vue'
Vue.use(Router)
var routes = [
		    {
		    	path:'/',
		    	name:'no1',
		    	component:no1
		    },{
		    	path:'/no2',
		    	name:'no2',
		    	component:no2
		    },
		    {
		    	path:'/no3',
		    	name:'no3',
		    	component:no3
		    },
		    {
		    	path:'/no4',
		    	name:'no4',
		    	component:no4,
		    	
		    }
]

export default new Router({
	routes
})