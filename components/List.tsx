import React from 'react'
interface PageProps{
    list: Array<string>
}
const List = ({ ...props }:PageProps) => {
    const {list} = props

  return (
      <ul className='flex flex-col gap-4 font-semibold text-[1.1rem]'>
          {list.map(item => <li key={item}>{item}</li>)}  
      
    </ul>
  )
}

export default List
