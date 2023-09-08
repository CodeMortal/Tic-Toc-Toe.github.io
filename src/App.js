import React, { useState } from 'react';
import Board from './Board';
import Info from './Info';
import Home from './Home';
import './css/app.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState('');
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [reset, setReset] = useState(false);

  const handleGameStart = (name1, name2) => {
    setPlayer1Name(name1);
    setPlayer2Name(name2);
    setGameStarted(true);
  };

  const handleReset = () => {
    setGameStarted(false);
    setWinner('');
    setReset(true);
  };

  return (
    <div className="App">
      <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
        <div className="winner-text">{winner}</div>
        <button onClick={handleReset}>Reset Board</button>
      </div>

      {!gameStarted ? (
        <Home
          onStart={(name1, name2) => handleGameStart(name1, name2)}
          player1Name={player1Name}
          player2Name={player2Name}
          setPlayer1Name={setPlayer1Name}
          setPlayer2Name={setPlayer2Name}
        />
      ) : (
        <>
          <Info player1Name={player1Name} player2Name={player2Name} />
          <Board reset={reset}
            setReset={setReset}
            winner={winner}
            setWinner={setWinner}
            player1Name={player1Name}
            player2Name={player2Name}
            setPlayer1Name={setPlayer1Name}
            setPlayer2Name={setPlayer2Name} />
        </>
      )}
    </div>
  );
}

export default App;
