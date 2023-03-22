import React from 'react'

import Logo from "../assets/darearqam.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-md navbar-light bg-white" >
  
    <img className="navbar-brand ml-0 logo" src={Logo} alt=""  />
    <svg data-bs-toggle="collapse" className='toggle ' data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>

    <div className="navbar-collapse collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto text-center ">
        <li className="nav-item bolder">
        <Link to="/"className="nav-link active " aria-current="page">Home</Link>
      
        </li>
      

        
        <li className="nav-item bolder">
   
        
            <Link to="/Halal"className="nav-link active " aria-current="page">Halal</Link>
        </li>
          
       
      
         </ul>
      </div>
        {/* </div> */}
        </nav>

    </>
  )
}



export default Navbar
