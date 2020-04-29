import React from 'react'
import './App.scss';


export default function Search(props) {
    return (
        <div className="search">
            <div className="input-holder">
                <input type="text" placeholder="Search users" onChange={props.onSearchUser}/>
            </div>
        </div>
    )
}