import { useState } from "react";

const TicTacToe = () => {
  const [gameFinished, setGameFinished] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [board, setBoard] = useState<string[]>([
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ]);
  const [currentTurn, setCurrentTurn] = useState<string>("X");
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>Tic Tac Toe</h1>

      <div className='grid grid-cols-3'>
        {board.map((i: string, idx) => (
          <div className='size-32 border-2 border-black' key={idx}>
            {i !== "." && i}
          </div>
        ))}
      </div>
      {gameFinished && <div>{`${winner} wins!`}</div>}
    </div>
  );
};

export default TicTacToe;
