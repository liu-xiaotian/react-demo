import Card from './components/Card';
function App(){
  const fn = (params:string)=>{
    console.log('子组件触发了 父组件的事件',params);
    
  }
  return(
    <>
      <Card title={'tt'} callback={fn}>
        <div>
          <section>
            <i>我是内容123</i>
          </section>
        </div>
      </Card>
      <Card callback={fn}></Card>
      <button onClick={window.onShow}>调用message</button>
    </>
  )
}

export default App