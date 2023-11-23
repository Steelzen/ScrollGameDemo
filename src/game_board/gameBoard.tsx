import "./styles.css";
import React, { useRef, useEffect, useState } from "react";
import AiPlayer from "../game_player/aiPlayer";
import HumanPlayer from "../game_player/humanPlayer";

type GameBoardProps = {};

const GameBoard: React.FC<GameBoardProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        setContext(ctx);
      }
    }
  }, []);

  return (
    <div className="gameBoard">
      <canvas ref={canvasRef} width="800px" height="600px"></canvas>
      {context && <HumanPlayer context={context} />}
      <AiPlayer />
    </div>
  );
};

export default GameBoard;
