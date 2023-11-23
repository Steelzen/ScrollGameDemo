import "./styles.css";
import React, { useState, useEffect } from "react";

type HumanPlayerProps = {
  context: CanvasRenderingContext2D;
};

const HumanPlayer: React.FC<HumanPlayerProps> = ({ context }) => {
  const [position, setPosition] = useState({ x: 100, y: 200 });

  const handleKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case "w":
        setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
        break;
      case "a":
        setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
        break;
      case "s":
        setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
        break;
      case "d":
        setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    context.fillStyle = "blue";
    context.fillRect(position.x, position.y, 50, 50);
  }, [context, position]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className="humanPlayer"
      style={
        {
          "--x": `${position.x}px`,
          "--y": `${position.y}px`,
        } as React.CSSProperties
      }
    >
      <div className="hpTexture"></div>
    </div>
  );
};

export default HumanPlayer;
