

export default function DrawPanel({ setColor, setWidth, setCap, setDrawType }) {

  const drawType = (
    <>
      <div className="panel-block">
        <p className="label">Draw Type</p>
        <form className="form">
          <select onChange={(e) => setDrawType(e.target.value)}>
            <option value="pen">Pen</option>
            <option value="shape">Shape</option>
          </select>
        </form>
      </div>
      <div className="panel-block">
        <p>Color:</p>
        <input onChange={(e) => setColor(e.target.value)} type="color" className="input"></input>
      </div>
    </>
  )

  const shapeOptions = (
    <>
      <div className="panel-block">
        <p className="label">Shape Options</p>
      </div>
      <div className="panel-block">
        <p>Shape</p>
        <div>

        </div>
      </div>
    </>
  )



  const penOptions = (
    <>
      <div className="panel-block">
        <p className="label">Pen Options</p>
      </div>
      <div className="panel-block">
        <p>Width:</p>
        <input onChange={(e) => setWidth(e.target.value)} className="input"></input>
      </div>

      <div className="panel-block">
        <p>Cap:</p>
        <form className="form">
          <select onChange={(e) => setCap(e.target.value)}>
            <option value="round">Round</option>
            <option value="square">Square</option>
            <option value="butt">Butt</option>
          </select>
        </form>
      </div>
    </>
  )


  return (
    <div className="panel" style={{ display: 'flex', flexDirection: 'column' }}>
      <p className="panel-heading" >
        Your Canvas
      </p>
      {drawType}
      {penOptions}
      {shapeOptions}
      <div style={{ backgroundColor: '#3f4042', display: "flex" }} >
        <svg style={{ backgroundColor: 'white', margin: 5, height: 50, borderRadius: 3 }} viewBox="0 0 100 100">
          <path
            d="
             M 50, 50
             m 45, 0
             a 40,40 0 1,0 -90,0
             a 40,40 0 1,0  90,0
             " />
        </svg>
        <svg style={{ backgroundColor: 'white', margin: 5, height: 50, borderRadius: 3 }} viewBox="0 0 100 100">
          <path
            d="M 10 10 H 90 V 90 H 10 L 10 10" />
        </svg>
        <svg style={{ backgroundColor: 'white', margin: 5, height: 50, borderRadius: 3 }} viewBox="0 0 100 100">
          <path
            d="M 50,10 90,90 10,90 5 z" />
        </svg>
        <svg style={{ backgroundColor: 'white', margin: 5, height: 50, borderRadius: 3 }} viewBox="0 0 100 100">
          <path
            d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z" />
        </svg>
      </div>
    </div>
  )
}
