import React from 'react';
import '../App.css';
import Level from '../component/Level'
class Level5 extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Level title="Level 5">
				<div className="start">恭喜通关了</div>
			</Level>
		)
	}
}
export default Level5