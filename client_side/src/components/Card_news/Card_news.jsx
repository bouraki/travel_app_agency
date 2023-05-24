import React from 'react'
import Flag from '../Flag/Flag'
import './Card_news.css'
import {FaPlane} from 'react-icons/fa'
import {AiTwotoneCar,AiOutlineHeart} from 'react-icons/ai'


const Card_news = ({image,location,flag,country,plane,car}) => {
  return (
    <div className="app_card-news">
         <img src={image} alt="" width="100%" height="200"/>
         <div className="app_card-desc">
                    <h3>{location}</h3>
                </div>
                <div className="colors">
                    <div className="gray"></div>
                    <div className="gray2"></div>

                </div>

        <div className="app_card-info">
            <Flag flag={flag}/>
            <span className="p-text" >{country}</span>
         </div>

         <div className="app_card-opt">
                    {
                        plane && (
                            <div className="opt-fly opt">
                                <FaPlane/>
                            </div>
                        )
                    }
                    {
                        car && (
                            <div className="opt-car opt">
                                <AiTwotoneCar/>
                            </div>
                        )
                    }

                </div>

    </div>
  )
}

export default Card_news