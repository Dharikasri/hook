import React, { useEffect, useState } from 'react';

function WebSocketExample() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const socket = new WebSocket('wss://echo.websocket.org');

        socket.onopen = () => {
            console.log('WebSocket connected');
            socket.send('Hello Server!');
        };

        socket.onmessage = (event) => {
            setMessage(event.data);
        };

        return () => {
            socket.close();
            console.log('WebSocket disconnected');
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div>
            <h2>WebSocket Example</h2>
            <p>Received message: {message}</p>
        </div>
    );
}

export default WebSocketExample;
