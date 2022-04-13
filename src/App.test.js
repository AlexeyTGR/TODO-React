// // import { render, screen } from '@testing-library/react';
// // import App from './App';

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });
// import React, { useState } from 'react';
// import './App.css';

// const Square = (props) => {
//   return (
//     <button
//       type="button"
//       className="square"
//       onClick={props.onClick}
//     >
//       {props.value}
//     </button>
//   );
// };

// const Board = (props) => {

//   const [turnOrder, setTurnOrder] = useState(true) //true == X next; false == O
  
//   const whoIsNext = turnOrder ? 'X' : 'O'
//   const handleClick = (i) => {
//     props.updateSquares(i, whoIsNext)
//     setTurnOrder(!turnOrder);
//   };

//   const renderSquare = (i) => {
  //     return (
    //       <Square
    //         value={props.squares[i]}
    //         onClick={() => handleClick(i)}
    //       />
    //     );
    //   };
    
    //   const winner = calculateWinner(props.squares);
    //   let status;
    //   if (winner) {
      //     status = `Выиграл ${winner}`;
      //   } else {
//     status = `Next player: ${whoIsNext}`;
//   };

//   return (
//     <div>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//     </div>
//   );
// };

// const Game = () => {
//   const initialArray = Array(9).fill(null);
//   const [squares, setSquares] = useState(initialArray);
//   const [history, setHistory] = useState([])

//   const handler = (i, value) => {
//     const newSquaresValues = [...squares];
//     newSquaresValues[i] = value;
//     setSquares(newSquaresValues);
//     addToHistory(newSquaresValues);
//   }

//   const addToHistory = (squares) => {
//     const updateHistory = [...history, squares];
//     setHistory(updateHistory)
//   }

//   const turnBack = (arr) => {
//     setSquares(arr)
//   }

//   const clearHistory = (i) => {
//     const newHistory = history.slice(0, i);
//     setHistory(newHistory);
//   }

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board 
//           addToHistory={addToHistory}
//           updateSquares={handler}
//           squares={squares}
//         />
//       </div>
//       <div className="game-info">
//         <div>{/* status */}</div>
//         <ol>{history.map((item, index) => {
//           return(<li key={index}>
//             <button 
//               type="button"
//               onClick={() => {
//                 turnBack(item)
//                 clearHistory(index)
//               }}
//             >
//             Go to {index + 1} turn
//             </button>
//             </li>
//         )})}</ol>
//       </div>
//     </div>
//   );
// };

// const calculateWinner = (squares) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// export default Game;
