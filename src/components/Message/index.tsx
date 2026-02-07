import './index.css'
import ReactDom  from 'react-dom/client'

const Message = ()=>{
  return (
    <div>
      提示组件
    </div>

  )
}

interface Itesm{
  messageContainer:HTMLDivElement
  root:ReactDom.Root
}
const queue:Itesm[] = []
window.onShow = ()=>{
  const messageContainer = document.createElement('div')
  messageContainer.className = 'message'
  messageContainer.style.top = `${queue.length * 50}px`
  document.body.appendChild(messageContainer)
  const root = ReactDom.createRoot(messageContainer)
  root.render(<Message/>)
  
  queue.push({
    messageContainer,
    root
  })

  setTimeout(() => {
    const item = queue.find(item => item.messageContainer == messageContainer)!
    root.unmount()
    document.body.removeChild(messageContainer)
    queue.splice(queue.indexOf(item),1)
  }, 2000);
}

//ts 声明扩充
declare global{
  interface Window{
    onShow:()=>void
  }
}

export default Message