import React from 'react'

const Card = (props) => {
  return (
    <div className=' flex m-6'>
        <img className=" h-12 w-12 rounded-full mr-4 mt-2" src={props.out.img_url} alt="card" />
        <div>
            <h1 className='text-2xl font-semibold'>{props.out.name}</h1>
            <p>{props.out.year} Years</p>
        </div>
    </div>
  )
}

export default Card