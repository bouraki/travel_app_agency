    import React from 'react'
import {AiOutlineUsergroupDelete,AiOutlineCalendar,AiTwotoneCar,AiOutlineHeart} from 'react-icons/ai'
import {FaPlane} from 'react-icons/fa'
import istanbul from '../../assets/istanbul.png'
import Flag from '../Flag/Flag'



const CardChild = ({place_image,plane,car,price,location,country,adults,date,nights,flag}) => {
  return (
    <div>
         <img src={place_image} alt="" width="100%" height="200"/>
                
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

                    <div className="opt-heart opt">
                        <AiOutlineHeart/>
                    </div>

                </div>

                <div className="app_card-desc">
                    <h3 className="card_hhh" >{location}</h3>
                    <h3 className="card_hhh" >${price}</h3>
                </div>

                <div className="app_card-info">
                    <Flag flag={flag}/>
                    <span className="card_span p-text" >{country}</span>
                    <AiOutlineUsergroupDelete/>
                    <span className="card_span p-text">{adults} Adults</span>
                </div>

                <div className="app_card-line"></div>

                <div className="app_card-time">
                    <p className="card_time p-text">   <AiOutlineCalendar/> {date} • {nights} Nights</p>
                </div>
    </div>
  )
}

export default CardChild