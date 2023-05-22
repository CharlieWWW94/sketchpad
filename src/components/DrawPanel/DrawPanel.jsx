

export default function DrawPanel({ setColor, setWidth, setCap, setDrawType, width }) {

  const drawType = (
    <>
      <div style={{ padding: 10 }}>
        <p style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Draw Type</p>
        <form>
          <select style={{ width: '100%', color: 'white', border: 'none', backgroundColor: '#242323' }} onChange={(e) => setDrawType(e.target.value)}>
            <option value="pen">Pen</option>
            <option value="shape">Shape</option>
          </select>
        </form>
      </div>
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <p style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Color Select</p>
        <input style={{ width: '100%', backgroundColor: '#242323', border: 'none', height: 22, padding: 3 }} onChange={(e) => setColor(e.target.value)} type="color"></input>
      </div>
    </>
  )

  const shapeOptions = (
    <>
      <div>
        <p style={{ color: 'black' }}>Shape Options</p>
      </div>
      <div>
        <p style={{ color: 'black' }}>Shape</p>
        <div>

        </div>
      </div>
    </>
  )



  const penOptions = (
    <>
      <div>
        <p style={{ color: 'white', fontSize: 14, fontWeight: 'bold', padding: 10 }}>Pen Options</p>
      </div>
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <p style={{ color: 'white', fontSize: 14 }}>Width:
          <span style={{ backgroundColor: '#242323', fontSize: 12, margin: 3, padding: 3, borderRadius: 2 }}>{width}</span>
        </p>
        <input
          style={{ width: '100%', height: 20, background: 'red', }}
          onChange={(e) => setWidth(e.target.value)}
          type="range"
          min="1" max="100"
          value={width}>
        </input>
      </div>

      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <p style={{ color: 'white', fontSize: 14 }}>Cap:</p>
        <form>
          <select style={{ width: '100%', color: 'white', border: 'none', backgroundColor: '#242323' }} onChange={(e) => setCap(e.target.value)}>
            <option value="round">Round</option>
            <option value="square">Square</option>
            <option value="butt">Butt</option>
          </select>
        </form>
      </div>
    </>
  )


  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#424141', height: '100%' }}>
      <p style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#242323', padding: 10 }}>
        Your Canvas
      </p>
      {drawType}
      {penOptions}
      <p style={{ color: 'white', fontSize: 14, fontWeight: 'bold', padding: 10 }}>Shape Select</p>
      <div style={{ backgroundColor: '#242323', display: "flex", padding: 5 }} >
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
      <div style={{ height: '100%', display: 'flex', alignItems: 'flex-end', padding: 10 }}>
        <button className="button" style={{ backgroundColor: '#FA5252', color: 'white', border: 'none', width: '100%' }}>
          <strong>Save Canvas</strong>
        </button>
      </div>
    </div>
  )
}
