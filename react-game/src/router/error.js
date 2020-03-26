import React from 'react';
import '../App.css';
import Level from '../component/Level'
class Error extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Level title="No Find">
				<div className="start" style={{fontSize:'8vh'}}>404</div>
			</Level>
		)
	}
}
export default Error