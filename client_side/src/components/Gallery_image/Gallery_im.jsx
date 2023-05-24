import React from 'react'
import './Gallery_im.css'

const Gallery_im = ({width=150, height=150,image}) => {
  return (
    <div className="app__image" style={{width:width?width:width,height:height?height:height}}>
        <img src={image} alt=""  />
    </div>
  )
}

export default Gallery_im