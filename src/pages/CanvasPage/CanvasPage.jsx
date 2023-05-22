import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import Navbar from "../../components/Navbar/Navbar";
import Canvas from "../../components/Canvas/Canvas";
import DrawPanel from "../../components/DrawPanel/DrawPanel";
import FrameUtils from "../../utils/AccountUtils/FrameUtils";
import AccountUtils from "../../utils/AccountUtils/AccountUtils";
import "./CanvasPage.scss"

const CanvasPage = () => {
  const [color, setColor] = useState('black');
  const [width, setWidth] = useState(3);
  const [cap, setCap] = useState('round');
  const [drawType, setDrawType] = useState('pen');

  const test = async () => {
    // const res = await AccountUtils.login("test3", "12345AAAAA")
    // console.log("hi", res);
    // const userID = res.id
    // const logoutRes = await AccountUtils.logout(userID)
    // const createRes = await FrameUtils.createFrame("New Frame", 5000, 5000, "hellooooo", header);
  }


  useEffect(() => {
    test();
  }, []);

  return (
    <PageContainer>
      <div className="page columns is-gapless">
        <div className="column is-three-quarters canvas-page-container">
          <div className="canvas-container">
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
            width={width}
          />
        </div>
      </div>
    </PageContainer >
  )
};

export default CanvasPage;
