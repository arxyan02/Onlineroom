import React from 'react'
import Coursescenter from './jsx/Coursescenter'
import Center from './jsx/Homecenter'
import Sidebar from './jsx/Sidebar'

export default function Coursespage() {
  return (
    <div className="Coursespage">
        <Sidebar/>
        <Coursescenter/>
    </div>
  )
}
