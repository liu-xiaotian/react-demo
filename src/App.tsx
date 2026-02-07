import Card from './components/Card';
function App(){
  return(
    <>
      <Card></Card>
      <button onClick={window.onShow}>调用message</button>
    </>
  )
}

export default App