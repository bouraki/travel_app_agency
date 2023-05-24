import React from 'react'
import Header from '../../Container/Header/Header'
import Discover from '../../Container/Discover/Discover'
import News from '../../Container/News/News'
import Gallery from '../../Container/Gallery/Gallery'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div>

      <Header/>
      <Discover/>
      <News/>
      <Gallery/>

    </div>
  )
}

export default Home