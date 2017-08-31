import React from 'react';

export class Campers extends React.Component {
	constructor(props) {
		super(props);

		this.createItem = this.createItem.bind(this);
	}

	createItem(prop) {
		return prop.map((camper, i) => {
			return (
				<tr key={i}>
					<td>{i + 1}</td>
					<td><img src={camper.img} />{camper.username}</td>
					<td>{camper.recent}</td>
					<td>{camper.alltime}</td>
				</tr>
			)
		});
	}

	render() {
		return(
			<tbody>{this.createItem(this.props.list)}</tbody>
		);
	}
}