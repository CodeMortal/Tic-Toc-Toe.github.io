import React from 'react';
import './css/info.css';

const Info = ({ player1Name, player2Name }) => {
    return (
        <div className="info">
            <h1 className="heading">Tic-Tac-Toe</h1>
            <div className="player1">Player 1: {player1Name}</div>
            <div className="player2">Player 2: {player2Name}</div>
        </div>
    );
};

export default Info;
