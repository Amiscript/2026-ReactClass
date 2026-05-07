// import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/33.jpg'

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 pl-16  pr-16 bg-amber-950 text-white">

 {/* <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/About">About Us</a></li>
    <li><a href="/Contact">Contact Us</a></li>
    <li><a href="/Pricing">Pricing</a></li>
    <li><a href="/Blog">Blog</a></li>
 </ul> */}
        {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><Link to="/Pricing">Pricing</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
        </ul> */}
     <div >
         <img  src={logo} alt="logo"  className="h-16 w-16" />
     </div>   
        <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/Pricing">Pricing</Link>
        <Link to="/Blog">Blog</Link>

        <div>
            <button className="bg-blue-500 px-20 py-4 ">GetStarted</button>
        </div>
    </div>
  )
}

export default Navbar