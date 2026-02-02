import { useHistory } from './hooks/useHistory';
import { useStorage } from './hooks/useStorage';

const App = ()=>{
  const [val, setVal] = useStorage('data', 1)
  const [history, push, replace] = useHistory()
  return(
    <>
    <h3>{val}</h3>
    <button onClick={()=>setVal(val+1)}>设置val</button>
    
    <button onClick={()=>{push('/aaa')}}>跳转</button>
    <button onClick={()=>{replace('/bbb')}}>替换</button>
    </>
  )
}

export default App