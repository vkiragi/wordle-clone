import React, { useContext } from "react";
import { AppContext } from "../App";

interface AppContextType {
  board: string[][];
}

interface LetterProps {
  letterPosition: number;
  attemptValue: number;
}

function Letter({ letterPosition, attemptValue }: LetterProps) {
  const { board } = useContext(AppContext) as AppContextType;
  const letter = board[attemptValue][letterPosition];
  return <div className="letter">{letter}</div>;
}

export default Letter;
