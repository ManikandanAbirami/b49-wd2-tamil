import React, { useReducer, useRef } from 'react'
import './TicTacToe.css';

const initialGameState = {
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
};

const gameReducer = (state, action) => {
    switch(action.type) {
        case 'MAKE_MOVE':
            if(state.board[action.index]) {
                console.log("Already occupied!!!")
                return state;
            }

            const updatedBoard = [...state.board];
            console.log("Before: ", state.board);
            updatedBoard[action.index] = state.currentPlayer;
            return {
                ...state,
                board: updatedBoard,
                currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
            }
        case 'RESET_GAME':
            return initialGameState;
        default:
            return state;
    }
}

function TicTacToe() {
    const [state, dispatch] =  useReducer(gameReducer, initialGameState);
    const gameBoardRef = useRef();

    const winningCombinations = [
        [0,1,2],[3,4,5],[6,7,8], //Rows
        [0,3,6],[1,4,7],[2,5,8], //Columns
        [0,4,8],[2,4,6], //Diagonals
    ]

    const checkWinner = () => {
        console.log("After: ",state.currentPlayer, " ", state.board);
        for (const combination of winningCombinations) {
            const [a,b,c] = combination;
            if(state.board[a] && state.board[a] === state.board[b] && state.board[a] === state.board[c]) {
                return state.board[a];
            }
        }

        return null;
    };

    const winner = checkWinner();

  return (
    <div className='tic-tac-toe'>
        <h1>Tic Tac Toe</h1>
        <div className='board'>
            {state.board.map((cell, index) => (
                <button 
                    key={index}
                    className='cell'
                    onClick={() => dispatch({type: 'MAKE_MOVE', index})}
                    disabled = {winner}
                >
                    {cell}
                </button>
            ))}
        </div>
        {winner && (
            <div className='winner-message'>
                <p>Winner: {winner}</p>
                <button className='reset-button' onClick={() => dispatch({type: 'RESET_GAME'})}>
                    Play Again
                </button>
            </div>
        )}
    </div>
  )
}

export default TicTacToe