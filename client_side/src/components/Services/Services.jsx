import React from 'react'
import './Services.scss'

const Services = ({icon,text}) => {
  return (
    <div className="services">
        {icon}
        <p>{text}</p>
    </div>
  )
}

export default Services