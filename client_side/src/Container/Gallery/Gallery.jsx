import React from 'react'
import Gallery_im from '../../components/Gallery_image/Gallery_im'
import './Gallery.css'
import { images } from '../../constant'


const Gallery = () => {
  return (
    <div className="app__gallery">
        <div className="side1">
            <Gallery_im image={images.canada_place} />
            <Gallery_im image={images.france_place} width={200} height={300} />
        </div>
        <div className="side2">
            <h1>Life is short and <br /> the world is wide!</h1>
            <p>From street closures to event specific traffic control learn about how out two eay data exchange helps keep cities informed and traffic flowing</p>
        </div>
        <div className="side3">
            <Gallery_im image={images.germany_place} width={250} height={350} />
            <Gallery_im image={images.italy_place} width={150} height={100} />
        </div>
    </div>
  )
}

export default Gallery