import React from 'react';
import '../App.css';
import Level from '../component/Level'
class Level2 extends React.Component {
	constructor(props) {
		super(props)
		this.T = this.T.bind(this)
	}
	T(e) {
		if (e.target.value == "入答案") {
			this.props.history.push({
				pathname: '/nazo-3',
				query: {}
			})
		}
	}
	render() {
		return (
			<Level title="Level 2">
				<div className="start">请输 入答案</div>
				<div className="Input"><input type="text" onInput={this.T}/></div>
			</Level>
		)
	}
}
export default Level2