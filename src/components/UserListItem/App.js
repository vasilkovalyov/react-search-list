import React from 'react'
import './App.scss';

export default function UserListItem(props) {
    const user = props.user;
    const onUserClick = props.onUserClick;

    return (
        <div className="user__list-item" onClick={onUserClick}>
            <div className="image">
                <img src={`./images/${user.image}.svg`} img={user.name}/>
            </div>
            <div className="name">
                <p>{user.name}</p>
            </div>
        </div>
    )
}
