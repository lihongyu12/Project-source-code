import React from 'react';
import './App.css';
import {
	HashRouter,
	Route,
	NavLink,
	Switch
} from 'react-router-dom'
import Index from './router/index'
import Level1 from './router/Level1'
import Level2 from './router/Level2'
import Level3 from './router/Level3'
import Level4 from './router/Level4'
import Level5 from './router/Level5'
import error from './router/error'
class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact strict path="/" component={Index}></Route>
					<Route exact strict path="/nazo-1" component={Level1}></Route>
					<Route exact strict path="/nazo-2" component={Level2}></Route>
					<Route exact strict path="/nazo-3" component={Level3}></Route>
					<Route exact strict path="/nazo-4" component={Level4}></Route>
					<Route exact strict path="/Level-five" component={Level5}></Route>
		  			<Route component={error}>
		 		 	</Route>
				</Switch>
   			 </HashRouter>
		)
	}
}


export default App;