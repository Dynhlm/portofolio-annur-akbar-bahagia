import Headers from "./components/Header/Headers"
import Sidebar from "./components/Sidebar/Sidebar"
import Footer from "./components/Footer/footer"
import { Outlet } from "react-router-dom"
import { useState } from "react"


export default function App(){
  const [click,setClick] = useState("Home")
  const [side,setSide] = useState("off")
  return (
    <>
      <Sidebar click={click} setClick={setClick} side={side} setSide={setSide}/>
      <div className="lg:block hidden w-[397px] h-32"></div>
      <main className="w-full">
        <Headers side={side} setSide={setSide}/>
        <Outlet/>
      <Footer/>
      </main>
    </>
  )
}