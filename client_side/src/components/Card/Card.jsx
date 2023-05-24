import React from 'react'
import './Card.css'

const Card = ({children,option,width,height}) => {
  return (
    <div className='card' style={{backgroundColor:option=='child'?'':'white'
    ,width:width?width:''
    ,height:height?height:''
    }} >
    {children}
    </div>
  )
}

export default Card