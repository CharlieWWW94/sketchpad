import { useRef } from "react";
import { useCanvas } from "../../hooks/useCanvas";
import "./Canvas.scss"

export default function Canvas({ color, cap, width, drawType }) {

  const canvasRef = useRef(null);
  const [
    setIsDrawing,
    setPrevCoords,
    shapeDraw,
    lineDraw
  ] = useCanvas(canvasRef);

  const markCanvas = (event) => {
    if (drawType === 'shape') {
      shapeDraw(event);
    } else {
      lineDraw(event, { width, color, cap });
    }
  }

  return (
    <canvas
      ref={canvasRef}
      className="canvas"
      onMouseMove={(markCanvas)}
      onMouseDown={() => setIsDrawing(true)}
      onMouseUp={() => {
        setIsDrawing(false)
        setPrevCoords(null)
      }
      }
      onMouseLeave={() => {
        setIsDrawing(false)
        setPrevCoords(null)
      }
      }
      style={{
        width: '100%',
        height: '100%',
      }}
    >
    </canvas>
  );
}
