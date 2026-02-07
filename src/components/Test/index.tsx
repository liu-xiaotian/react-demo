import React from 'react';

const Test:React.FC = (props)=>{
  const event = new Event('on-card') //添加到事件中心
  const clickTap = ()=>{
    console.log(event);
    event.params = {name:'我见过龙'}
    window.dispatchEvent(event)
    
  }
  return(
    <button onClick={clickTap}>派发事件</button>
  )
}

//扩充event类型
declare global {
  interface Event{
    params:any
  }
}

export default Test