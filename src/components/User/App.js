import React from 'react';
import './App.scss';


export default function User(props) {
    const user = props.user;

    return (
        <div className="user">
            <div className="user__img">
                <img src={`./images/${user.image}.svg`}/>
            </div>
            <div className="user__title">
                <h2>{user.name}</h2>
            </div>
            <div className="user__body">
                <div className="user__hide-content">
                    <a href={`tel:${user.phone}`} className="user__phone">{user.phone}</a>
                    <p>{user.phrase}</p>
                </div>
            </div>
        </div>
    )
}