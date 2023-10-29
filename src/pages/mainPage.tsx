import GameStartButton from "../buttons/gameStart";
import LeaderBoardButton from "../buttons/leaderBoard";
import "./styles.css";

const MainPage = () => {
  let developerName: string = "Theo";

  return (
    <div className="mainPage">
      <h1>Scroll Game Demo</h1>
      <h2>Developed by {developerName}</h2>
      <GameStartButton />
      <LeaderBoardButton />
    </div>
  );
};

export default MainPage;
