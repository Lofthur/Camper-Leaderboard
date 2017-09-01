import React from 'react';

export class Campers extends React.Component {
	constructor(props) {
		super(props);

		this.createItem = this.createItem.bind(this);
	}

	createItem(prop) {
		return prop.map((camper, i) => {
			return (
				<tr key={i} className="camper">
					<td>{i + 1}</td>
					<td className="img-container"><img src={camper.img} /></td>
					<td>{camper.username}</td>
					<td>{camper.recent}</td>
					<td>{camper.alltime}</td>
				</tr>
			)
		});
	}

	render() {
		return(
			<tbody className="table-body">{this.createItem(this.props.list)}</tbody>
		);
	}
}