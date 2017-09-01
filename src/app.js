import React from 'react';
import { render } from 'react-dom';
import style from './style/app.sass';
import { Leaderboard } from './components/Leaderboard';

const recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showList: []
		}

		this.updateShowList = this.updateShowList.bind(this);
	}

	componentDidMount() {
		fetch(recentUrl)
			.then(resp => resp.json())
			.then(data => {
				this.setState({showList: data});
			});
	}

	updateShowList(url) {
		fetch(url)
			.then(resp => resp.json())
			.then(data => {
				this.setState({
					showList: data
				})
			})
	}


	render() {
		return(
			<div className="container">
				<h1 className="header">Leaderboard</h1>
				 <Leaderboard list={this.state.showList} updateShowList={this.updateShowList}/>
			</div>
		);
	}
}



render(<App />, document.getElementById('root'));