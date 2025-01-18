import React from 'react'
import { assets } from "../admin_assets/assets.js"

const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-5'>
        <img src={assets.logo} alt="" className='w-20 md:w-32'/>
        <img src={assets.profile_image} alt="" className='w-10 md:w-13'/>
    </div>
  )
}

export default NavBar