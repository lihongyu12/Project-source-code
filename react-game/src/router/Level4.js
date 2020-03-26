import React from 'react';
import '../App.css';
import Level from '../component/Level'
class Level3 extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		console.log('Level-five')
	}
	render() {
		return (
			<Level title="Level 4">
				<div className="start">请进入第五关</div>
			</Level>
		)
	}
}
export default Level3