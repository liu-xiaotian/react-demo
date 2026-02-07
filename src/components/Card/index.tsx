import './index.css';
import React from 'react';

// 1. 第一种写法 interface 安装给 props
interface props{
  title:string
}

//2. React.FC function component

//默认值
//1. 解构{title:'默认标题'}
//2. 声明一个默认对象
const defaultProps:Partial<props> = {
  title:'defaultProps'
}
const Card:React.FC<props>=(props)=>{
  const { title } = { ...defaultProps, ...props }
  console.log(title);
  
  return(
    <div className="card">
      <header>
                <div>{props.title}</div>
                <div>副标题</div>
            </header>
            <main>
                内容区域
            </main>
            <footer>
                 <button>确认</button>
                 <button>取消</button>
            </footer>
    </div>
  )
}
export default Card



// export default function Card(props:props){
  
// }