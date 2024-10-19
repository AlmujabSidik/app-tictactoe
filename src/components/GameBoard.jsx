import React, { useState } from "react";

const GameBoard = ({ value }) => {
  const [active, setActive] = useState(null);
  const handleClick = () => {
    setActive("X");
  };
  return (
    <div
      className="flex items-center justify-center w-28 h-28 border rounded cursor-pointer"
      onClick={handleClick}
    >
      {active}
    </div>
  );
};

export default GameBoard;
