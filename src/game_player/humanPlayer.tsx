import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

interface HumanPlayerProps {
  context: CanvasRenderingContext2D;
  boardHeight: number;
}

export interface HumanPlayerRef {
  updatePosition: () => void;
}

const HumanPlayer: React.ForwardRefRenderFunction<
  HumanPlayerRef,
  HumanPlayerProps
> = ({ context, boardHeight }, ref) => {
  const characterWidth = 100;
  const characterHeight = 250;
  const boardFloorPosition = boardHeight - characterHeight - 20;
  const position = useRef({ x: 100, y: boardFloorPosition });
  const prevPosition = useRef({
    x: 100,
    y: boardFloorPosition,
  });
  const isJumping = useRef(false);
  const jumpY = useRef(0);
  const jumpHeight = 200;
  const jumpSpeed = 10;

  const handleJump = () => {
    if (isJumping.current) {
      if (jumpY.current < jumpHeight) {
        position.current.y -= jumpSpeed;
        jumpY.current += jumpSpeed;
      } else if (
        jumpY.current >= jumpHeight &&
        position.current.y < boardFloorPosition
      ) {
        position.current.y += jumpSpeed;
        if (position.current.y >= boardFloorPosition) {
          position.current.y = boardFloorPosition;
          isJumping.current = false;
        }
      }
    }
  };

  const draw = () => {
    context.clearRect(
      prevPosition.current.x,
      prevPosition.current.y,
      characterWidth,
      characterHeight
    );
    handleJump();
    context.fillStyle = "blue";
    context.fillRect(
      position.current.x,
      position.current.y,
      characterWidth,
      characterHeight
    );
    prevPosition.current = { ...position.current };
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "w":
          if (!isJumping.current) {
            isJumping.current = true;
            jumpY.current = 0;
          }
          break;
        case "a":
          position.current.x -= 20;
          break;
        case "d":
          position.current.x += 20;
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    updatePosition: draw,
  }));

  return null;
};

export default forwardRef(HumanPlayer);
