import './Action.scss'
import {delete_product} from '../../Api/api'
import { useStateContext } from '../../Context/StateContext'
import React,{useRef,useState} from 'react'


export default function Action({dlt,element}){
const {removeproduct} = useStateContext()
const [closeaction, setcloseaction] = useState()
const outside = useRef()
function handleaction(e){
    console.log(e.target)
}
    







    return (
        <div ref={outside} onClick={handleaction} className="app__action">
            <span onClick={removeproduct}  className="span" >Delete</span>
            <span className="span" >Edit</span>
            <span className="span" >csv</span>
        </div>
    )
}