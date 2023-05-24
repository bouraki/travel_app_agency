import React,{useRef} from 'react'
import Flag from '../../components/Flag/Flag'
import './News.css'
import {FiSend} from 'react-icons/fi'
import Card from '../../components/Card/Card'
import CardChild from '../../components/Card/CardChild'

import { cards_data } from '../../database/cards'
import Card_news from '../../components/Card_news/Card_news'

import { get_All_email } from '../../Api/api'

const News = () => {
    const email_value = useRef('')
    const Handleemail = (e) =>{
        e.preventDefault()
        let email  = { email: email_value.current.value }
        // fetch('http://localhost:3005/email',{
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(email)
        // }).then(response => {
        //     console.log(response)
        // })
        get_All_email(email).then((em) => {
            console.log('email saved')
        })

    }

  return (
    <div className="app__news">

        <div className="app__news-left">
            <h1>Get inspiration for <br /> future trips weekly</h1>

            <ul>
                <li>✔️ New trip destination every week. </li>
                <li>✔️ Less than 4-hour travel time. </li>
                <li>✔️ Itinearies for 2-4 night weekend. </li>
                <li>✔️ Made just for you , by our AI engine </li>
            </ul>

            <div className="app__news-input">
                <input ref={email_value}  name="email" type="email" placeholder="Please enter your email" />
                <FiSend onClick={Handleemail} />
            </div>
        </div>

        <div className="app__news-right">

            <div className="app__news-right1">
                    {
                                cards_data && cards_data.slice(0,1).map((card, i) =>(
                            <Card option='white' height={300} width={220} key={i} >
                                    <Card_news 
                                    image={card.image}
                                    location={card.location}
                                    flag={card.flag}
                                    country={card.country}
                                    plane={card.plane}
                                    car={card.car}
                                    />
                            </Card>
                                ))
                    }
            </div>

            <div className="app__news-right2">
                    {
                                cards_data && cards_data.slice(1,3).map((card, i) =>(
                            <Card option='white' height={300} width={220} key={i} >
                                    <Card_news 
                                    image={card.image}
                                    location={card.location}
                                    flag={card.flag}
                                    country={card.country}
                                    plane={card.plane}
                                    car={card.car}
                                    />
                            </Card>
                                ))
                    }
            </div>


        </div>



    </div>
  )
}

export default News