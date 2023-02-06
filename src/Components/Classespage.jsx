import React from 'react'
import Classescenter from './jsx/Classescenter'
import Center from './jsx/Homecenter'
import Sidebar from './jsx/Sidebar'

export default function Classespage() {
  return (
    <div className="Classespage">
        <Sidebar/>
        <Classescenter/>
    </div>
  )
}
