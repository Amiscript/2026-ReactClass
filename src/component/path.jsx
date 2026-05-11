import React from 'react'
import image from '../assets/33.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Path() {
  return (
<div className="mt-20 ">
            <div className="mt-4 flex  justify-center relative ">
 <img src={image} alt="Description" className="h-100 w-200 rounded-lg border-8 border-gray-900" />
 <div classNme="">
    <div className ="absolute bottom-3 left-130 bg-amber-700 text-white px-8 py-4 rounded-lg">
 Modern Dashboard Interface
    </div>
   <ArrowForwardIcon className="absolute bottom-6 left-190 text-white bg-amber-600" />
</div>
 </div>
</div>
  )
}

export default Path