import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard.jsx';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('There was an error fetching the users!', error));
    }, []);

    return (
        <div className="app">
            <div className="user-list">
                {users.map(user => (
                    <UserCard
                        key={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        imgSrc={`https://picsum.photos/seed/${user.id}/300/300`}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
