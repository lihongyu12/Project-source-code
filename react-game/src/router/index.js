import React from 'react';
import '../App.css';
import {
	NavLink
} from 'react-router-dom'
import Level from '../component/Level'
class Index extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Level title="Nazo Game">
				<div className="start"><NavLink to="/nazo-1">开始</NavLink></div>
			</Level>
		)
	}
}
export default Index