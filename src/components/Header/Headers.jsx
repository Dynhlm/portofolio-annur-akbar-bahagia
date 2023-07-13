import { useState } from "react"
import { CiDark } from "react-icons/ci"
import { CiLight } from "react-icons/ci"


export default function Headers({side,setSide}) {
    const classBurger = "border-solid border-x-8 border-y-[1px] border-black rounded-[2px]"
    const [tema,setTema] = useState(<CiLight size={30}/>)
    const [theme,setTheme] = useState(true)

  return (
    <header className="flex justify-between p-4 align-middle sticky top-0 bg-white opacity-90">
        <div className="flex flex-col gap-[2px] align-middle justify-center lg:opacity-0 opacity-1" 
        onClick={()=>{
            if(side=="on"){
                setSide("off")
            }else{
                setSide("on")
            }
        }
        }>
            <div className={classBurger}></div>
            <div className={classBurger}></div>
            <div className={classBurger}></div>
        </div>
        <div className="">
            <p className="font-bold lg:opacity-0 opacity-1">Annur Akbar Bahagia</p>
        </div>
        <div>
            <span className="hover:cursor-pointer" onClick={()=>{
                if(theme === true){
                    setTema(<CiDark size={30}/>)
                    setTheme(false)
                }else{
                    setTema(<CiLight size={30}/>)
                    setTheme(true)
                }
            }
            }>{tema}</span>
        </div>
    </header>
  )
}
