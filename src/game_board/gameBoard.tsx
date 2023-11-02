import AiPlayer from "../game_player/aiPlayer";
import HumanPlayer from "../game_player/humanPlayer";

type GameBoardProps = {};

const GameBoard: React.FC<GameBoardProps> = () => {
  return (
    <div className="GameBoard">
      <HumanPlayer />
      <AiPlayer />
    </div>
  );
};

export default GameBoard;
