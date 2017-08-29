import React from 'react';
import { render } from 'react-dom';
import style from './style/app.sass';
import { Leaderboard } from './components/Leaderboard';

const recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const topUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recentList: [],
			topList: []
		}

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {
		fetch(recentUrl)
			.then(resp => resp.json())
			.then(function(data) {
				console.log(data);
				this.setState({
					recentList: data
				})
			});
	}

	render() {
		return(
			<div>
				<h1>Hello again sir</h1>
				 <Leaderboard recentList={this.state.recentList} topList={this.state.topList} />
			</div>
		);
	}
}



render(<App />, document.getElementById('root'));