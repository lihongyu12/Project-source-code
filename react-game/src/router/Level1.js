import React from 'react';
import '../App.css';
import Level from '../component/Level'
class Level1 extends React.Component {
	constructor(props) {
		super(props)
		this.T = this.T.bind(this)
	}
	T(e) {
		if (e.target.value == "答案") {
			this.props.history.push({
				pathname: '/nazo-2',
				query: {}
			})
		}
	}
	render() {
		return (
			<Level title="Level 1">
				<div className="start">请输入答案</div>
				<div className="Input"><input type="text" onInput={this.T}/></div>
			</Level>
		)
	}
}
export default Level1