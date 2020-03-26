import React from 'react';
import '../App.css';
import Level from '../component/Level'
class Level3 extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Level title="Level 3">
				<div className="start">请进入第四关</div>
			</Level>
		)
	}
}
export default Level3