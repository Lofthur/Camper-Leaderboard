import React from 'react';

export class Campers extends React.Component {
	constructor(props) {
		super(props);

		this.createItem = this.createItem.bind(this);
	}

	createItem(prop) {
		return prop.map((camper, i) => {
			// return <li>{camper.username}</li>
			return (
				<tr>
					<td>{i}</td>
					<td>{camper.username}</td>
					<td>{camper.recent}</td>
					<td>{camper.alltime}</td>
				</tr>
			)
		});
	}

	render() {
		return(
			// <ul>{this.createItem(this.props.recentList)}</ul>
			<tbody>{this.createItem(this.props.recentList)}</tbody>
		);
	}
}