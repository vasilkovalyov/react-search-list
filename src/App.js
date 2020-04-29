import React, { Component } from 'react';
import axios from 'axios'

import './App.scss';
import User from './components/User/App';
import UserList from './components/UserList/App';
import Search from './components/Search/App';


class App extends Component {
	state = {
		array: [],
		selectUser: null,
		userIsVisible: true,
		filteredArray: []
	}


	componentWillMount() {
		axios.get('./data/data.js')
		.then(response => response.data)
		.then(data => {
			this.setState({
				array: data,
				selectUser: data[0],
				filteredArray: data
			})
		})
	}

	handleClick = (user) => {
		this.setState({
			selectUser: user,
			user: user.name
		})
	}

	toggleUser = () => {
		this.setState({
			userIsVisible: !this.state.userIsVisible
		})
	}

	filterUsersByName(name) {
		return this.state.array.filter(item => item.name.toLowerCase().search(name.toLowerCase()) !== -1)
	}

	searchUsers = (e) => {
		this.setState({
			filteredArray: this.filterUsersByName(e.target.value)
		})
	}

	render() {
		const user =  this.state.selectUser ? <User user={this.state.selectUser}/> : null;
		const filterUsers = this.state.filteredArray;

		return (
			<section className="section-app">
				<div className="container">
					<Search onSearchUser={this.searchUsers}/>
					<aside className="aside">
						<div className="btn-wrap">
							<button className="btn-show-user" onClick={this.toggleUser}>{ !this.state.userIsVisible ? 'Show user' : 'Hide user'}</button>
						</div>
						{ this.state.userIsVisible && user}
					</aside>
					<div className="section-content">
						<UserList userList={filterUsers} onSelectUser={this.handleClick}/>
					</div>
				</div>
			</section>
		);
	}
}

export default App;
