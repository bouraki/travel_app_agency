import React from 'react'
import './Notfound.scss'
import {Link} from 'react-router-dom'

const Notfound = () => {
  return (
    <div className="app__notfound">
      <h1>4<span>0</span>4</h1>
      <h3>SORRY,THERE'S <br /> <span>NOTHING HERE</span> </h3>
      <Link to="/">GO HOME</Link>
    </div>
  )
}

export default Notfound