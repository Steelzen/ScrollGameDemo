import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/mainPage";
import GameStartButton from "./buttons/gameStart";

function App() {
  return (
    <div className="App">
      <MainPage />
      <GameStartButton />
    </div>
  );
}

export default App;
