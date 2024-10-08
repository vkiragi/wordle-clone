import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext } from "react";
import { boardDefault } from "./Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
      </AppContext.Provider>

      <Keyboard />
    </div>
  );
}

export default App;
