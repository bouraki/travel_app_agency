import React from 'react'
import Card from '../../components/Card/Card'
import './Discover.css'
import CardChild from '../../components/Card/CardChild'
import { Link } from 'react-router-dom'
import { cards_data } from '../../database/cards'


const Discover = () => {
  return (
    <div className="app__discover">
        <h1 className='header_dis' >Discover Weekly</h1>
        <p className="p-text">Explore new travel inspiration updated every Monday</p>
        <div className="app__cards">

                {
                    cards_data && cards_data.map((card, i) =>(
                <Card option='child' key={i}>
                        <CardChild 
                        place_image={card.image}
                        plane={card.plane}
                        car={card.car}
                        price={card.price}
                        location={card.location}
                        country={card.country}
                        adults={card.adults}
                        date={card.date}
                        nights={card.nights}
                        flag={card.flag}
                        />
                </Card>
                    ))
                }

        </div>
                <div className="app__cards-a">
                    <Link to="/discover" className="app_viewall">View All</Link>
                </div>
    </div>
  )
}

export default Discover