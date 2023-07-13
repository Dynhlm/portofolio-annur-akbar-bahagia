import { useContext } from "react"
import DataProject from "../../src/Data"
import List from "../../src/components/ListProject/List"

export default function Home() {
  const data = useContext(DataProject)
  return (
    <div className="px-2 sm:px-20">
      <div className="min-h-full min-w-full">
          <h3 className="text-xl">Hey there 🙌</h3>
          <h1 className="font-bold text-5xl">I'M Akbar</h1>
          <h2 className="text-3xl font-bold">Backend Developer</h2>
          <p>Backend development enthusiast that has a high learning curve, seek best
          practices, stay up-to-date on emerging technologies, and eager to learn
          something new</p>
      </div>
      <div className="mt-6 flex flex-col gap-6">
        <h1 className="text-4xl font-bold">My Last Project{"</>"}</h1>
        {
          data.map((value,index)=>{
            if(index<=3){
              return <List key={value.Id} title={value.title} img={value.img} des={value.description}/>
            }
          })
        }
      </div>
    </div>
  )
}
