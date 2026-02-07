// import Card from './components/Card';
// import Test from './components/Test';
// import Test2 from './components/Test2';
// import AsyncComponent from './components/Async';
import React,{ lazy, Suspense } from 'react'; 
const AsyncComponent = lazy(()=> import('./components/Async'))

const App:React.FC = ()=>{
  return(
    <>
      <Suspense fallback={<div>loading</div>}>
        <AsyncComponent />
      </Suspense>
    </>
  )
}

// function App(){
//   const fn = (params:string)=>{
//     console.log('子组件触发了 父组件的事件',params);
    
//   }
//   return(
//     <>
//       <Card title={'tt'} callback={fn}>
//         <div>
//           <section>
//             <i>我是内容123</i>
//           </section>
//         </div>
//       </Card>
//       <Card callback={fn}></Card>
//       <button onClick={window.onShow}>调用message</button>
//       <hr />
//       <Test></Test>
//       <Test2></Test2>
//     </>
//   )
// }

export default App