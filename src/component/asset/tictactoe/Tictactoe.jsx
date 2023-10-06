import React, { useRef, useState } from 'react';
import './Tictactoe.css';



let data = ['','','','','','','','','']

export const Tictactoe = () => {

    let [count, setcount] = useState(0);
    let [lock, setlock] = useState(false);
    let titleRef=useRef(null);

    const toggle = (e,num) => {
        if (lock) {
            return 0;
        }
        if (count%2===0) {
            e.target.innerHTML = 'X';
            data[num]="X";
            setcount(++count);
        } else {
            e.target.innerHTML = '0';
            data[num]="0";
            setcount(++count); 
        }

    const won =(winner) => {
        setlock(true);
        if (winner === 'X') {
            titleRef.current.innerHTML = 'Congratulation : X wins';
        }
        else {
            titleRef.current.innerHTML = 'Congratulation : O wins';
        }
    }
    
    const reset = () => {
        setlock(false);
        data = ['','','','','','','','',''];
        titleRef.current.innerHTML = 'Tic Tac Toe in <span>React</span>';
    }

    
  return (
    <div className='container'>
        <h1 className="title" ref={titleRef}>Tic Tac Toe in <span>React</span></h1>
        <div className="boards">
            <div className="row1">
                <div className="box" onClick={(e)=>{toggle(e,0)}}></div>
                <div className="box" onClick={(e)=>{toggle(e,1)}}></div>
                <div className="box" onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="box" onClick={(e)=>{toggle(e,3)}}></div>
                <div className="box" onClick={(e)=>{toggle(e,4)}}></div>
                <div className="box" onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="box" onClick={(e)=>{toggle(e,6)}}></div>
                <div className="box" onClick={(e)=>{toggle(e,7)}}></div>
                <div className="box" onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className="reset" onClick={()=>{reset()}}>RESET</button>
    </div>
  )
}


function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }}
