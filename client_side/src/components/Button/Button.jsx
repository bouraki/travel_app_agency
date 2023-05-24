import React from 'react'
import './Button.css'


const Button = ({text,icon}) => {
  return (
    <>
    <button className='button_button'>{text} {icon&&icon}</button>
    </>
  )
}

export default Button