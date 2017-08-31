import React from 'react';
import { Campers } from './Campers';

export class Leaderboard extends React.Component {

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}


	handleClick(e) {
		const url = e.target.dataset.url;
		this.props.updateShowList(url);

		switch(e.target.id) {
			case 'recent':
				e.target.innerHTML = 'Points in last 30 days &#9662;';
				document.getElementById('top').innerHTML = 'All time points';
				break;

			case 'top':
				e.target.innerHTML = 'All time points &#9662;';
				document.getElementById('recent').innerHTML = 'Points in last 30 days';
				break;
		}
	}


	render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Leaderboard</th>
						</tr>
						<tr>
							<th>#</th>
							<th>Camper Name</th>
							<th><a href="#"  id="recent" data-url="https://fcctop100.herokuapp.com/api/fccusers/top/recent" onClick={this.handleClick}>Points in last 30 days &#9662;</a></th>
							<th><a href="#" id="top" data-url="https://fcctop100.herokuapp.com/api/fccusers/top/alltime" onClick={this.handleClick}>All time points</a></th>
						</tr>
					</thead>	
					<Campers list={this.props.list} />
				</table>
			</div>
		);
	}
}