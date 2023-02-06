import React from 'react'
import './css/Sidebar.css'
import './css/Buttonstyles.css'
import {SiGoogleclassroom} from 'react-icons/si'
import {GiBookCover} from 'react-icons/gi'
import {BiTask,BiUserCheck} from 'react-icons/bi'
import {SlHome} from 'react-icons/sl';
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="Sidebar">
      <div className="Sidebarcontainer">
        <button className='Home' onClick={()=>{navigate('/')}}><SlHome color='white' size={40} /></button>
        <button className='Classes' onClick={()=>{navigate('/Classespage')}}><SiGoogleclassroom color='white' size={40} /></button>
        <button className='Courses' onClick={()=>{navigate('/Coursespage')}}><GiBookCover color='White' size={40}/></button>
        <button className='Submissions' onClick={()=>{navigate('/Submissionspage')}}><BiTask color='white' size={40} /></button>
        <button className='Attendence' onClick={()=>{navigate('/Attendencepage')}}><BiUserCheck color='white' size={40} /></button>
      </div> 
    </div>
  )
}
