import { useState } from "react";

const INITIAL_BOARD = Array(9).fill(null);
const WINNER_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [gameFinished, setGameFinished] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [board, setBoard] = useState<string[] | any[]>(INITIAL_BOARD);
  const [isCurrentX, setIsCurrentX] = useState<boolean>(true);

  const isWinner = (board: string[] | any[]) => {
    for (let i = 0; i < WINNER_PATTERNS.length; i++) {
      const [a, b, c] = WINNER_PATTERNS[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return;
      }
    }
  };

  const handleClick = (idx: number) => {};
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>Tic Tac Toe</h1>

      <div className='grid grid-cols-3'>
        {board.map((i, idx) => (
          <button
            onClick={() => handleClick(idx)}
            className='size-32 border-2 border-black'
            disabled={i !== null}
            key={idx}
          >
            {i === null ? "X" : "O"}
            {i}
          </button>
        ))}
      </div>
      {gameFinished && <div>{`${winner} wins!`}</div>}
    </div>
  );
};

export default TicTacToe;
