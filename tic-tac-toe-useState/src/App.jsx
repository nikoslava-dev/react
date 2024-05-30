import { useState } from 'react';
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function onCellClick(rowIndex, cellIndex){
    setActivePlayer(prev => prev === 'X' ? 'O' : 'X');
    setGameTurns(prev => {
      let currentPlayer = 'X';
      if (prev.length && prev[0].player === 'X'){
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { cell: { rowIndex: rowIndex, cellIndex: cellIndex }, player: currentPlayer},
        ...prev,
      ];

      return updatedTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol className='highlight-player' id="players">
          <Player name="player 1" symbol="X" isActivePlayer={activePlayer === 'X'}/>
          <Player name="player 2" symbol="0" isActivePlayer={activePlayer === 'O'}/>
        </ol>
        <GameBoard onCellClick={onCellClick} turns={gameTurns}/>
      </div>
      <Logs turns={gameTurns}/>
    </main>
  )
}

export default App
