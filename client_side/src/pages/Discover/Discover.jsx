import React from 'react'
import { useEffect,useState } from 'react'
import api,{get_product,get_one_product  } from '../../Api/api'
import Card from '../../components/Card/Card'
import CardChild from '../../components/Card/CardChild'
import {Link} from 'react-router-dom'
import './Discovers.css'

const Discover = () => {
  const [Data, setData] = useState()
  useEffect(()=>{
    get_product().then((res)=>{
      setData(res.data.response)
    }).catch(err=>{
      console.log(err.message)
    })
  },[])
  return (
    <div className='app__discovers'>
      {
        Data && Data.map((pro,i)=>
        (
          <Link key={pro._id} to={`/details/${pro._id}`} onClick={()=>get_one_product(pro._id)} >
            <Card >
              <CardChild
                  place_image={`http://localhost:3005/uploads/${pro.image}`}
                  plane={true}
                  car={true}
                  price={pro.price}
                  location={pro.title}
                  country={pro.description}
                  adults={5}
                  date="may "
                  nights={5}
                  flag={`http://localhost:3005/uploads/${pro.image}`}
              />
              
            </Card>
          </Link>

        ))
      }
    </div>
  )
}

export default Discover