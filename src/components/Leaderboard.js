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
			<h2>This is from Leaderboard as a function statement</h2>
			<Campers recentList={props.recentList} topList={props.topList} />
		</div>
	);
}