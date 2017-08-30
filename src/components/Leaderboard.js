import React from 'react';
import { render } from 'react-dom';
import { Campers } from './Campers';

// export class Leaderboard extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h2>This is from Leaderboard</h2>
// 				<Campers />
// 			</div>
// 		);
// 	};
// }

export function Leaderboard(props) {
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
						<th>Points in last 30 days</th>
						<th>All time points</th>
					</tr>
				</thead>	
				<Campers recentList={props.recentList} />
			</table>
		</div>
	);
}