import React, { useState, useEffect } from 'react';

function UserData() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await response.json();
            setUserData(data);
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once after initial render

    if (!userData) return <p>Loading...</p>;

    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
        </div>
    );
}

export default UserData;
