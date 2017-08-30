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
		}
	}

	componentDidMount() {
		fetch(recentUrl)
			.then(resp => resp.json())
			.then(data => {
				this.setState({recentList: data})
				console.log(this.state.recentList[0].username);
			});
	}

	render() {
		return(
			<div>
				<h1>Hello again sir</h1>
				 <Leaderboard recentList={this.state.recentList} />
			</div>
		);
	}
}



render(<App />, document.getElementById('root'));