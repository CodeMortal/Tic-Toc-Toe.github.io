import React, { useState, useEffect, useRef } from "react";
import "./css/board.css";

const Board = ({ reset, setReset, winner, setWinner, player1Name, player2Name, setPlayer1Name, setPlayer2Name }) => {
    const [turn, setTurn] = useState(0);
    const [data, setData] = useState(Array(9).fill(""));

    const boardRef = useRef(null);

    const draw = (event, index) => {
        if (data[index] === "" && winner === "") {
            const currentPlayer = turn === 0 ? "X" : "O";

            const newData = [...data];
            newData[index] = currentPlayer;
            setData(newData);

            event.target.innerText = currentPlayer;

            setTurn(turn === 0 ? 1 : 0);
        }
    };

    useEffect(() => {
        if (reset) {
            const cells = boardRef.current.children;

            for (let i = 0; i < 9; i++) {
                cells[i].innerText = "";
            }

            setData(Array(9).fill(""));
            setTurn(0);
            setWinner("");
            setReset(false);
        }
    }, [reset, setReset, setWinner]);

    useEffect(() => {
        const winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const combo of winCombos) {
            const [a, b, c] = combo;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                const winnerName = data[a] === "X" ? player1Name : player2Name;
                setWinner(`${winnerName} Wins!`);
                return;
            }
        }

        if (data.every((cell) => cell !== "")) {
            setWinner("It's a Tie!");
        }
    }, [data, player1Name, player2Name, setWinner]);

    return (
        <div ref={boardRef} className="board">
            {data.map((cell, index) => (
                <div key={index} className={`input input-${index}`} onClick={(e) => draw(e, index)}></div>
            ))}
        </div>
    );
};

export default Board;
