import { useState, useEffect } from "react";



export const useCanvas = (canvasRef) => {
  const [canvasContext, setCanvasContext] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevCoords, setPrevCoords] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    const initialContext = canvas.getContext('2d');
    initialContext.fillStyle = "white";
    initialContext.fillRect(0, 0, canvas.width, canvas.height);
    setCanvasContext(initialContext);
  }, [canvasContext, canvasRef]);

  const returnCanvasAsString = () => canvasRef.current.toDataURL();

  const shapeDraw = (event) => {
    if (!isDrawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const coords = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
    const path = new Path2D(`M ${coords.x},${coords.y} h 20 v 20 h -20 v -20`);
    canvasContext.stroke(path)
  }
  const lineDraw = (event, { width, color, cap }) => {
    if (!isDrawing) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const coords = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }

    canvasContext.strokeStyle = color;
    canvasContext.lineWidth = width;
    canvasContext.lineCap = cap;

    canvasContext.beginPath();
    if (prevCoords) {
      canvasContext.moveTo(prevCoords.x, prevCoords.y);
      canvasContext.lineTo(coords.x, coords.y);
    }

    canvasContext.stroke();
    canvasContext.fill();
    setPrevCoords(coords);
  }

  return [
    setIsDrawing,
    setPrevCoords,
    shapeDraw,
    lineDraw,
    returnCanvasAsString
  ]


}
