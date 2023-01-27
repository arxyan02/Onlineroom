import React from 'react'
import {TiThMenu} from 'react-icons/ti'
import {CgProfile} from 'react-icons/cg'
import {IoNotifications} from 'react-icons/io5'

export default function Topbar() {
  return (
    <div className="Topbar">
      <h1>ADMINAPP</h1>
        <div className="Topleft"></div>
        <div className="Topcenter"></div>
        <div className="Topright">
          <button className='Bell'><IoNotifications color='black' size={40} cursor='pointer'/></button>
          <button className='Profile'><CgProfile color='black' size={40} cursor='pointer' /></button>
          <button className='Menu' ><TiThMenu color='black' size={40} cursor='pointer' /></button>
        </div>
      </div>
  )
}
