import React,{useEffect,useState} from 'react'
import "./Details.scss"
import Gallery from '../../components/Gallery_image/Gallery_im'
import {Link,useParams} from 'react-router-dom'
import {AiFillLike,AiFillDislike,AiOutlineLike,AiOutlineDislike} from 'react-icons/ai'
import {BsFillShieldFill,BsFillEnvelopeFill} from 'react-icons/bs'
import Button from '../../components/Button/Button'
import Services from '../../components/Services/Services'
import {BiBed} from 'react-icons/bi'
import {AiOutlineWifi} from 'react-icons/ai'
import {ImPhoneHangUp} from 'react-icons/im'
import {MdOutlineMonitor,MdFoodBank} from 'react-icons/md'
import {CgGym} from 'react-icons/cg'
import {TbYoga} from 'react-icons/tb'
import {BsArrowReturnLeft} from 'react-icons/bs'
import { get_one_product } from '../../Api/api'



const Details = () => {
  const {id} = useParams()
  const [singleProduct, setsingleProduct] = useState([])
  const url = 'h'
  useEffect(()=>{
    get_one_product(id).then((product)=>{
      setsingleProduct(product.data)   
    }).catch((error)=>{
      console.log(error.message)
    })
  },[])
  return (
    
    <div className="app__details">
      <Link to="/discover" ><BsArrowReturnLeft/> Return Back</Link>
      {
        singleProduct && singleProduct.map((pro,i)=>(
          <div key={i}>
      <h1>315 Spectrum Road</h1>
      <p>Summerville, SCC, 24956</p>

      <div className="app__details-images">
          <Gallery width={650} height={420} image={`http://localhost:3005/uploads/${pro.image}`} />
          <div className="app__details-images-sec">
              <Gallery width={400} height={180} image={`http://localhost:3005/uploads/${pro.image}`} />
              <Gallery width={400} height={220} image={`http://localhost:3005/uploads/${pro.image}`} />
          </div>
      </div>

      <div className="app__details-info">
        <div className="app__details-info-left">
            <h1>Room Description</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus saepe quia corporis explicabo soluta! Minus, fuga dignissimos. Ut atque vitae, magnam cumque optio iste assumenda tenetur nisi quod inventore!
            Soluta dignissimos sed, accusantium quos esse odio expedita omnis porro veritatis saepe libero fugit culpa a dolorem officia, voluptatem dolor? Quaerat hic deleniti quod consequuntur accusantium fuga perferendis odio minus.</p>
        </div>

        <div className="app__details-info-right">
          <div className="app__details-info-right-col1">
            <h3>$1854 <span className="p-text">/Night</span></h3>
            <div className="icons">
              <AiOutlineLike/>
              <AiOutlineDislike/>
            </div>
          </div>

          <div className="app__details-info-right-col2">
            <h4>315 Spectrum Road</h4>
            <p className="p-text">Summerville ,SCC , 45875</p>
          </div>

          <div className="app__details-info-right-col3">
            <span><BsFillShieldFill/>Avoid Rental Scams</span>
            <span><BsFillEnvelopeFill/>Request more info</span>
          </div>
          <div className="app__details-info-right-col4">
            <button className='details_btn'>Contact us</button>
          </div>
        </div>
      </div>
      </div>
        ))
      }
      

      <div className="Header">
            <h1>Room Services</h1>
      </div>
      <div className="app__details-services">
        <Services text='3 bedroom' icon={<BiBed/>} />
        <Services text='Wifi' icon={<AiOutlineWifi/>} />
        <Services text='24/7 ' icon={<ImPhoneHangUp/>} />
        <Services text='smart tv ' icon={<MdOutlineMonitor/>} />
        <Services text='3 bedroom' icon={<BiBed/>} />
        <Services text='Wifi' icon={<AiOutlineWifi/>} />
        <Services text='24/7 ' icon={<ImPhoneHangUp/>} />
        <Services text='smart tv ' icon={<MdOutlineMonitor/>} />
    </div>
          <div className="Header">
            <h1>Hotels Services</h1>
          </div>

        <div className="app__details-hotels">
          <Services text='buffet' icon={<MdFoodBank/>} />
          <Services text='gym' icon={<CgGym/>} />
          <Services text='wellness & yoga' icon={<TbYoga/>} />
          <Services text='wellness & yoga' icon={<TbYoga/>} />
          <Services text='buffet' icon={<MdFoodBank/>} />
          <Services text='gym' icon={<CgGym/>} />
          <Services text='wellness & yoga' icon={<TbYoga/>} />
          <Services text='wellness & yoga' icon={<TbYoga/>} />
        </div>

      </div>
  )
}

export default Details