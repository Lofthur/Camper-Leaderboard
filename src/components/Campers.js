import React from 'react';

export class Campers extends React.Component {
	constructor(props) {
		super(props);

		this.handleData = this.handleData.bind(this);
	}

	handleData() {
		const tempData = (this.props.recentList).map(obj => {
			<li>obj.username</li>
		});
		console.log(tempData);
		return tempData;
	}

	render() {
		return(
			<ul>{this.handleData()}</ul>
		);
	}
}