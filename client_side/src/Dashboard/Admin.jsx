import React from 'react'
import Form from '../components/Form/Form'
import Dashall from './DashCard/Dashall'
import Tablelisting from './Tables/Tablelisting'


const Admin = () => {
  
  return (
    <div className='app__admin'>
      <Form />
      <Dashall/>
      <Tablelisting/>
    </div>
  )
}

export default Admin