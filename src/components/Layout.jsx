import { useState } from "react";
import ButtonGame from "./ButtonGame";
import GameBoard from "./GameBoard";

const Layout = () => {
  const [isXNext, setIsXNext] = useState(false);
  const [value, setValue] = useState(Array(9).fill(null));
  const square = Array(9).fill(null);

  const handleSquareClick = (index) => {
    if (winner) return;
    setValue((currValue) => {
      const newValue = [...currValue];

      if (newValue[index] !== null) return currValue;
      newValue[index] = isXNext ? "O" : "X";

      setIsXNext(!isXNext);
      return newValue;
    });
  };

  const calculateWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  };

  const winner = calculateWinner(value);
  const handleIsOver = () => {
    setValue(Array(9).fill(null));
    setIsXNext(false);
  };
  return (
    <section className="flex items-center min-h-screen w-full justify-center gap-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {square.map((_, index) => {
          return (
            <GameBoard
              key={index}
              value={value[index]}
              handleIsX={() => handleSquareClick(index)}
            />
          );
        })}
      </section>
      <section className="flex flex-col gap-4">
        <div>
          {winner ? (
            <h1 className="text-3xl font-bold">Winner: {winner}</h1>
          ) : (
            <h1>Next Player : {isXNext ? "O" : "X"}</h1>
          )}
          <ButtonGame handleClick={handleIsOver}>Start Over</ButtonGame>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <h1>History</h1>
          <ButtonGame>Langkah #1</ButtonGame>
          <ButtonGame>Langkah #2</ButtonGame>
          <ButtonGame>Langkah #3</ButtonGame>
        </div>
      </section>
    </section>
  );
};

export default Layout;
