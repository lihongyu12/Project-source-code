import React from 'react';
import '../App.css';
class Level extends React.Component {
	constructor(props) {
		super(props)
		this.myBox = React.createRef()
	}
	componentDidMount() {
		setTimeout(() => {
			this.myBox.current.style.opacity = '1'
			this.myBox.current.style.transform = 'rotate(0deg) translate(0px)'
		}, 500)
	}
	render() {
		return (
			<div className="Level" ref={this.myBox}>
				<div className="Level-title">{this.props.title}</div>
				<div>{this.props.children}</div>
			</div>
		)
	}
}
export default Level