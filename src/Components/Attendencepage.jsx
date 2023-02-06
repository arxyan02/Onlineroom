import React from 'react'
import Sidebar from './jsx/Sidebar'
import Center from './jsx/Homecenter'
import Attendencenter from './jsx/Attendencecenter'

export default function Attendencepage() {
  return (
    <div className="Attendencepage">
        <Sidebar/>
        <Attendencenter/>
    </div>
  )
}
