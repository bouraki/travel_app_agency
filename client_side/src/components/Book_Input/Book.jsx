import React from 'react'
import './Book.css'
import {BiLocationPlus} from 'react-icons/bi'
import {SlCalender} from 'react-icons/sl'
import {AiFillDollarCircle,AiOutlineSearch} from 'react-icons/ai'


const Book = () => {
  return (
    <div className="app__input">

        <div className="app__input1">
            <BiLocationPlus/>
            <label htmlFor="destination">search your destination</label><br />
            <input type="text" placeholder="Enter Your Destination" />
        </div>

        <div className="app__input1">
            <SlCalender/>
            <label htmlFor="destination">search your date</label><br />
            <input type="date" placeholder="Enter Your Destination" />
        </div>

        <div className="app__input1">
            <div className="app__input1-price">
            <AiFillDollarCircle/>
            <label htmlFor="destination">max price</label><br />
            <span>5000$</span>
            </div>
            <div className="app__input1-range">
                <input type="range" placeholder="Enter Your Destination" />
            </div>
        </div>
        <AiOutlineSearch/>
    </div>
  )
}

export default Book