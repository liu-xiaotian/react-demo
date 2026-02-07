import React, { useState } from 'react'

const useCookie = (name:string, initValue:string = '')=>{
  const getCookie = ()=>{
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]*)(;|$)`)) 
    return match ? match[2] : initValue
  }
  const [cookie, setCookie] = useState(getCookie())

  const updateCookies = (newValeu:string)=>{
    document.cookie = `${name}=${newValeu}`
    setCookie(newValeu)
  }
  const deleteCookie = () => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
    setCookie("")
  }
  React.useDebugValue(cookie)
  return [cookie, updateCookies, deleteCookie] as const
}

const App: React.FC = () => {
   const [cookie, updateCookies, deleteCookie] = useCookie('xxx', 'value')
   return <>
      <div>{cookie}</div>
      <button onClick={()=>updateCookies('update-xxx')}>更新</button>
      <button onClick={() => { deleteCookie() }}>删除cookie</button>
   </>;
};
export default App;