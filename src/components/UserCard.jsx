import React from 'react';
import './UserCard.css';

const UserCard = ({ name, username, email, imgSrc }) => {
    return (
        <div className="user-card">
            <img src={imgSrc} alt={name} />
            <div className="user-info">
                <h2>{name}</h2>
                <p>@{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default UserCard;
