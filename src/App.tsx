import { useState } from 'react'

function App() {
  let [index,setIndex] = useState(0)
  const handerClick = ()=>{
    setIndex(index =>index + 1)
    setIndex(index =>index + 1)
    setIndex(index =>index + 1)
    console.log(index);
    
  }

  return (
    <>
      <h1>{index}</h1>
      

      <button onClick={handerClick}>更改值</button>
    </>
  )
}

export default App
