import React, { Component } from 'react';
import './App.scss';
import UserListItem from '../UserListItem/App';


class UserList extends Component {

    getUserList() {
        return this.props.userList.map((item, i) => (
            <div key={i} className="col" > 
                <UserListItem user={item} id={i} onUserClick={this.props.onSelectUser.bind(this, item)}/> 
            </div>
        ));
    }
    
  	render() {
        return (
            <div className="user-list">
                { this.getUserList() }
            </div>
        )
	}
}

export default UserList;
