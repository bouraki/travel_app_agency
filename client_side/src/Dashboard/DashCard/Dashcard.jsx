import React from 'react'
import './Dashcard.scss'

const Dashcard = ({icon,text,number}) => {
  return (
    <div className="app__dashcard">
        <div className="app__row1">
            {icon}
            <div className="row_text">
                <p>{text}</p>
                <h3>{number}</h3>
            </div>
        </div>
        <div className="line"></div>
    </div>
  )
}

export default Dashcard