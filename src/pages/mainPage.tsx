import LinkButton from "../buttons/linkButton";
import "./styles.css";

const MainPage = () => {
  let developerName: string = "Theo";

  return (
    <div className="mainPage">
      <h1>Scroll Game Demo</h1>
      <h2>Developed by {developerName}</h2>
      <LinkButton
        link="/game"
        buttonName="Start Game"
        className="gameStartButton"
      />
      <LinkButton
        link="/leaderboard"
        buttonName="Leader Board"
        className="leaderBoardButton"
      />
    </div>
  );
};

export default MainPage;
