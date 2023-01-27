import React from 'react'

export default function Sidebar() {
  return (
    <div className="Sidebar">
        <div className="Courses" ><h3>Courses</h3><br /><button className='Completed'>completed</button> <br /><button className='Ongoing'>ongoing</button> <br /><button className='Available'>available</button></div>
        <div className="Tasks">Tasks <br />Due <br />upcoming <br />DailyDash</div>
        <div className="Submissions">Submissions <br />pending <br />assigned <br />completed</div>
    </div>
  )
}
