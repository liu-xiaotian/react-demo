import { useImmer } from 'use-immer';

interface User{
  name:string
  age:number
  profile:{
    avatar:string
    bio:string
    preferences:{
      theme:'light'|'dark'
      notifications:boolean
    }
  }
}

export default function UserProfile(){
  const [user, setUser] = useImmer<User>({
    name:'xiao',
    age:23,
    profile:{
      avatar:'avatar.jpg',
      bio:'coder',
      preferences:{
        theme:'light',
        notifications:true
      }
    }
  })

  const updateTheme =()=>{
    setUser(draft=>{
      draft.profile.preferences.theme='dark'
    })
  }
  const updateBio = (newBio:string)=>{
    setUser(draft=>{
      draft.profile.bio = newBio
    })
  }

  return(
    <div className='user-profile'>
      <h2>{user.name}</h2>
      <p>年龄：{user.age}</p>
      <p>个人简介：{user.profile.bio}</p>
      <p>主题：{user.profile.preferences.theme}</p>
      <button onClick={updateTheme}>切换主题</button>
      <button onClick={()=>updateBio('热爱编程')}>更新简介</button>
    </div>
  )
}
