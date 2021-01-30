import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'
const UseEffectFetch = () => {

    const [Users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h1>github Users</h1>
            <ul className="users">
                {
                    Users.map((user) => {
                        const { id, login, avatar_url, html_url } = user;
                        return <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default UseEffectFetch;
