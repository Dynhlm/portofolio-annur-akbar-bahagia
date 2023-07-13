import React from 'react'

export default function List(props) {
  return (
    <div className='border-b-[1px] border-solid border-gray-500 w-[100%] flex gap-3 flex-col sm:flex-row items-center sm:items-center'>
      <div className='p-2 bg-gray-300 w-fit h-fit rounded-[5px]'>
        <img src={props.img} alt="" className='sm:max-w-[200px] max-w-[300px]'/>
      </div>
      <div>
        <h1 className='text-lg font-bold'>{props.title}</h1>
        <p>{props.des}</p>
      </div>
    </div>
  )
}
