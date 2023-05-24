import React,{useEffect,useState,useRef} from 'react'
import Table from 'react-bootstrap/Table';
import Header from './Header';
import './Table.scss'
import {get_product} from '../../Api/api'
import {BiDotsVertical} from 'react-icons/bi'
import Action from '../Action/Action';
import { useStateContext } from '../../Context/StateContext';

const Tablelisting = () => {
  const {removeproduct} = useStateContext()
  const [data, setdata] = useState()
  const [id, setid] = useState()
  const outside = useRef()

  const handleaction = (item) => {
    if (id == item) {
      setid(null)
    } else {
      setid(item)
    }
  };



  useEffect(()=>{
    get_product().then(response=>{
      setdata(response.data.response)
    }).catch((err)=>{
      console.log('product not found')
    })
  },[])
  const tr_data = ['hotel','price','availability','nights','reservation','action']
  return (
    <div className="app__table">
      <Header text='listing table' />
        <Table  className="table" responsive="sm">
        <thead>
          <tr>
            {
              tr_data.map((tr,i)=>(
                <th key={i} >{tr}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
            {
              data && data.map((data,i)=>(
                <tr  className="alltr" key={i} data-id={data._id}>
                    <td >
                        <img className='image_rounded' src={`http://localhost:3005/uploads/${data.image}`} alt=""  />
                        <span>{data.title}</span>
                    </td>
                    <td style={{letterSpacing:'.9px',padding:'25px'}} ><span   className='dollar'>$</span>{data.price}</td>
                    <td>Available</td>
                    <td>8</td>
                    <td>45</td>
                    <td ref={outside}>
                        <BiDotsVertical  className='bsbs' data-id={data._id} onClick={()=>handleaction(data._id)} />
                        {data._id == id && <Action />}
                    </td>
                </tr>
              ))
            }
        </tbody>
      </Table>
    </div>
  )
}

export default Tablelisting