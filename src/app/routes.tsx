import { Route, Routes } from "react-router-dom";
import GamePage from "../pages/gamePage";
import LeaderBoardPage from "../pages/leaderBoardPage";
import MainPage from "../pages/mainPage";

const ModularRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/leaderboard" element={<LeaderBoardPage />} />
    </Routes>
  );
};

export default ModularRoutes;
