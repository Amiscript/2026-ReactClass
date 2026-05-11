// import React from 'react'
import image from '../assets/33.jpg'


function position() {
  return (
    <div className="mt-4 flex  justify-center relative ">
        <div className="bg-red-600 h-20 w-20 rounded-full absolute top-0 left-95 z-40">
            <img src={image} alt="Description" className=" object-fit h-full w-full rounded-full" />
        </div>
        <div className="bg-blue-600 h-20 w-20 rounded-full absolute top-0 left-110 z-50">
            <img src={image} alt="Description" className=" object-fit h-full w-full rounded-full" />
        </div>
        <div className="bg-green-600 h-20 w-20 rounded-full absolute top-0 left-125 z-60">
            <img src={image} alt="Description" className=" object-fit h-full w-full rounded-full" />
        </div>
        <div className="">
            500+ businesses already using our platform
        </div>
    </div>
  )
}

export default position