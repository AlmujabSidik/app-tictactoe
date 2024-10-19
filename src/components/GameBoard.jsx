import React, { useState } from "react";

const GameBoard = ({ value, handleIsX }) => {
  return (
    <div
      className="flex items-center justify-center w-28 h-28 border rounded cursor-pointer"
      onClick={handleIsX}
    >
      {value}
    </div>
  );
};

export default GameBoard;
