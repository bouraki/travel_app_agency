import React from 'react'
import './Header.css'
import image from '../../assets/header_img.png'
import Button from '../../components/Button/Button'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Book from '../../components/Book_Input/Book'

const Header = () => {
  return (
    <div className="app__header">

        <div className="app__header-left">
            <h1>Personalized trip <br /> in minutes. <span>Only $4.99</span> </h1>
            <p>Based on your occasion, style and budget. It includes recommendations for travel, stay, and activities.</p>
            {/* <Button text="plan a trip"  icon={<HiArrowNarrowRight/>}/>     */}
            <Book/>
        </div>

        <div className="app__header-right">
            <img src={image} alt="" />
        </div>


    </div>
  )
}

export default Header