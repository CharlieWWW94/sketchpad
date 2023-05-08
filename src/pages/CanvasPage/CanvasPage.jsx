import { useState } from "react";
import Canvas from "../../components/Canvas/Canvas";
import DrawPanel from "../../components/DrawPanel/DrawPanel";
import "./CanvasPage.scss"

const CanvasPage = () => {
  const [color, setColor] = useState('black');
  const [width, setWidth] = useState(3);
  const [cap, setCap] = useState('round');
  const [drawType, setDrawType] = useState('pen');

  return (
    <div className="page columns is-gapless">
      <div className="column is-three-quarters" style={{ display: 'flex', backgroundColor: '#151617', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '80%', height: '80%' }}>
          <Canvas
            color={color}
            cap={cap}
            width={width}
            drawType={drawType}
          />
        </div>
      </div>
      <div className="column">
        <DrawPanel
          setColor={setColor}
          setWidth={setWidth}
          setCap={setCap}
          setDrawType={setDrawType}
        />
      </div>
    </div>
  )
};

export default CanvasPage;
