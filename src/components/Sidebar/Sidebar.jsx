import fotoProfile from '../../assets/fotoProfile.jpg'
import { NavLink } from 'react-router-dom'
import {AiFillLinkedin} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"

//Style
const StyleSide = ["min-h-full bg-gray-400 w-72 lg:top-0 lg:left-0 top-14 lg:fixed left-[-300px] p-10 fixed duration-700","min-h-full bg-gray-400 w-72 lg:top-0 top-20 lg:fixed left-0 p-10 fixed duration-700"]
const StyleLink = ['tran px-7 py-2 bg-gray-600 hover:bg-gray-500 active:bg-black active:text-white rounded-t','px-7 py-2 hover:bg-gray-500 active:bg-black active:text-white rounded-t']
export default function Sidebar({click,setClick,side}) {
  return (
    <div className={side == "on" ? StyleSide[1]:StyleSide[0]}>
      <div className='flex justify-center align-middle mt-1'>
        <img src={fotoProfile} alt="" className='rounded-[50%] w-40'/>
      </div>
      <div className='flex flex-col mt-5'>
        <NavLink 
          className={click === "Home" ? StyleLink[0] : StyleLink[1]} to={"/"}
          onClick={()=> setClick("Home")}
        >
          Home
        </NavLink>
        <NavLink to={"/Project"}
          onClick={()=> setClick("Project")}
          className={click === "Project" ? StyleLink[0] : StyleLink[1]}
        >
          Project
        </NavLink>
        <NavLink to={"/"}
          onClick={()=> setClick("Services")}
          className={click === "Services" ? StyleLink[0] : StyleLink[1]}
        >
          Services
        </NavLink>
        <NavLink to={"/"}
          onClick={()=> setClick("Store")}
          className={click === "Store" ? StyleLink[0] : StyleLink[1]}
        >
          Store
        </NavLink>
        <NavLink to={"/"}
          onClick={()=> setClick("Blog")}
          className={click === "Blog" ? StyleLink[0] : StyleLink[1]}
        >
          Blog
        </NavLink>
        <NavLink to={"/"}
          onClick={()=> setClick("Cv")}
          className={click === "Cv" ? StyleLink[0] : StyleLink[1]}
        >
          Cv
        </NavLink>
        <NavLink to={"/"}
          onClick={()=> setClick("Contact")}
          className={click === "Contact" ? StyleLink[0] : StyleLink[1]}
        >
          Contact
        </NavLink>
      </div>
      <div className='flex gap-3 justify-center mt-11'>
        <a href=""><AiOutlineGithub size={30}/></a>
        <a href=""><AiFillLinkedin size={30}/></a>
        <a href=""><AiOutlineMail size={30} /></a>
      </div>
    </div>
  )
}
