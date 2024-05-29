

import React,{useState} from 'react'
import Card from "./Card"


const Birthday = () => {
    let data=[
        {
            id:1,
            img_url:"https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
            name:"Malinga",
            year:29
        },
        {
            id:2,
            img_url:"https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
            name:"Rohit",
            year:29
        },
        {
            id:3,
            img_url:"https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
            name:"Kohli",
            year:29
        },
        {
            id:4,
            img_url:"https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
            name:"Tendulkar",
            year:29
        },
        {
            id:5,
            img_url:"https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
            name:"Dhoni",
            year:29
        },


    ]
   const [a,setA]= useState(data)
   
    console.log(data)
    const onDelete=()=>{
        setA([])
       
    }
  return (
    <div className=' bg-white shadow-2xl w-[500px] items-center m-auto p-10'>
    <h1 className='text-3xl font-bold text-center'>{a.length===0? "O Birthdays Today":"5 Cricketers Birthday"}</h1>
         {
        a.map(each=> <Card key={each.id} out={each} />)
    }
    <div className='flex justify-center items-center'>
    <button onClick={onDelete} className='py-2.5 px-5 mt-4 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Clear all</button>
    </div>
   
    </div>
  )
}

export default Birthday