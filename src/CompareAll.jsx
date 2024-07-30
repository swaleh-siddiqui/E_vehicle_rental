import React from 'react'
import  Compare  from './Compare'
import "./CompareAll.css"

function CompareAll() {
  return (
    <div className='compareall'>
        <h1>Compare the varients of SE03</h1>
        <div className="tab">
            <Compare/>
        </div>
        
    </div>
  )
}

export default CompareAll