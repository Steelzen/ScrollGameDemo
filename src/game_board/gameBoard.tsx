import "./styles.css";
import React, { useRef, useEffect, useState, useCallback } from "react";
import AiPlayer from "../game_player/aiPlayer";
import HumanPlayer, { HumanPlayerRef } from "../game_player/humanPlayer";

const GameBoard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const humanPlayerRef = useRef<HumanPlayerRef>(null);
  const requestRef = useRef<number>();
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const drawGround = useCallback((ctx: CanvasRenderingContext2D) => {
    const groundY = ctx.canvas.height - 20;
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(ctx.canvas.width, groundY);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, []);

  const gameLoop = useCallback(() => {
    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      drawGround(context);
      humanPlayerRef.current?.updatePosition(); // draw() in humanPlayer.tsx
    }
    requestRef.current = requestAnimationFrame(gameLoop);
  }, [context, drawGround]);

  //set up canvas context
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        setContext(ctx);
      }
    }

    gameLoop();

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [gameLoop]);

  return (
    <div className="gameBoard">
      <canvas ref={canvasRef} width={800} height={600} />
      {context && (
        <HumanPlayer ref={humanPlayerRef} context={context} boardHeight={600} />
      )}
    </div>
  );
};

export default GameBoard;
