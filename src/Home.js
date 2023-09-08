import React, { useState } from 'react';

import './css/home.css';

const Home = ({ onStart, player1Name, player2Name, setPlayer1Name, setPlayer2Name }) => {
    const handleStartGame = () => {
        if (player1Name && player2Name) {
            onStart(player1Name, player2Name);
        } else {
            alert('Please enter names for both players.');
        }
    };

    return (
        <div className="Home">
            <h1 className="heading">Tic-Tac-Toe</h1>

            <input
                className="player1"
                value={player1Name}
                onChange={(e) => setPlayer1Name(e.target.value)}
                placeholder="Enter Player1 Name"
            />

            <input
                className="player2"
                value={player2Name}
                onChange={(e) => setPlayer2Name(e.target.value)}
                placeholder="Enter Player2 Name"
            />
            <button className="start" onClick={handleStartGame}>
                Start
            </button>
        </div>
    );
};

export default Home;
