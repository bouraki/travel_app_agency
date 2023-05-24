import React from 'react'
import './Flag.css'

const Flag = ({flag}) => {
  return (
    <div className="flag-img">
    <img src={flag} alt="" />
    </div>
  )
}

export default Flag