import React, { useState } from 'react';
import './Tictactoe.css';


function Box ({value, onBoxClick}) {
  return (
    <div className='box' onClick={onBoxClick}>{value}</div>
  );
};


const Tictactoe = () => {

    const [xIsNext, setXIsNext] = useState(true);
    const [boxes, setboxes] = useState(Array(9).fill(null));
    const [gameOver, setGameOver] = useState(false);
    
    
    function handleClick(i) {
        if (boxes[i] || calculateWinner(boxes)) {
            return;
          }
        const nextboxes = boxes.slice();
        if (xIsNext) {
            nextboxes[i] = "X";
          } else {
            nextboxes[i] = "O";
          }
          setboxes(nextboxes);
          setXIsNext(!xIsNext);
      };

     
    const resetBoard = () => {
      setGameOver(false);
      setboxes(Array(9).fill(null));
    }

  return (
    <div className='container'>
        <div className="title" >Tic Tac Toe in <span>React</span></div>
        <div className="board" onClick={gameOver ? resetBoard : calculateWinner}>
            <div className="row1">
                <Box value={boxes[0]}  onBoxClick={() => handleClick(0)}/>
                <Box value={boxes[1]}  onBoxClick={() => handleClick(1)}/>
                <Box value={boxes[2]}  onBoxClick={() => handleClick(2)}/>
            </div>
            <div className="row2">
                <Box value={boxes[3]}  onBoxClick={() => handleClick(3)}/>
                <Box value={boxes[4]}  onBoxClick={() => handleClick(4)}/>
                <Box value={boxes[5]}  onBoxClick={() => handleClick(5)}/>
            </div>
            <div className="row3">
                <Box value={boxes[6]}  onBoxClick={() => handleClick(6)}/>
                <Box value={boxes[7]}  onBoxClick={() => handleClick(7)}/>
                <Box value={boxes[8]}  onBoxClick={() => handleClick(8)}/>
            </div>
        </div>
        <button className="reset" onClick={resetBoard}>Reset</button>
    </div>
  )
}

export default Tictactoe;

function calculateWinner(boxes) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a];
      }
    }
    return null;
  }