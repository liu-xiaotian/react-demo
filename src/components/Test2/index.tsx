export default function Test2(){
  //接收参数
  window.addEventListener('on-card',(e)=>{
    console.log(e.params, '触发了');
    
  })
  return <div className="card"></div>
}