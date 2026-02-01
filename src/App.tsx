import { useState } from 'react'

function App() {
  let [bool,setBool] = useState(false)
  const handerClick = ()=>{
    setBool(!bool)
    console.log(bool);
  }

  return (
    <>
      <h1>{bool?'true':'false'}</h1>
      <button onClick={handerClick}>更改值</button>
    </>
  )
}

export default App
