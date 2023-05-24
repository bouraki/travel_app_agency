import React,{useState,useEffect} from 'react';
import Dashcard from "./Dashcard";
import { useStateContext } from '../../Context/StateContext';

import {HiPresentationChartLine} from 'react-icons/hi'
import {AiOutlineUserAdd,AiOutlineUser,AiFillDollarCircle} from 'react-icons/ai'
import {get_product} from '../../Api/api'


export default function Dashall(){
    const {setlisting,listing} = useStateContext()
    useEffect(()=>{
        get_product().then((response)=>{
            setlisting(response.data.response.length)
        })
    },[])
    
    return (
        <div className="app__dashall">
            <Dashcard  number={listing}  text='listing' icon={<HiPresentationChartLine style={{backgroundColor:'#dc2265'}}/>} />
            <Dashcard  number='1'  text='users' icon={<AiOutlineUser style={{backgroundColor:'#02c39a'}}/>} />
            <Dashcard  number='10'  text='booking' icon={<AiFillDollarCircle style={{backgroundColor:'#3992ee'}}/>} />
            <Dashcard  number='78'  text='message' icon={<AiOutlineUserAdd style={{backgroundColor:'red'}}/>} />
        </div>
    )
}