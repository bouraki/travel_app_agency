import React,{useState} from 'react'
import {AiOutlineUserDelete,AiFillLock,AiOutlineMail,AiOutlineArrowRight} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {register} from '../../../Api/api'
import {Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Register = () => {
  const navigate = useNavigate()
  const [dataform, setdataform] = useState()
  const [alert, setalert] = useState(null)
  const initialform = {username:'',password:'',email:'',}
  const formchange = e =>{
    setdataform({...dataform,[e.target.name]:e.target.value})
  }
  function send(e){
    e.preventDefault()
    register(dataform).then(()=>{
      setalert({variant:'success',msg:'User Registered'})
      setTimeout(()=>{
        setalert(null)
        navigate('/login')
      },4000)
    }).catch(err=>{
      if(err){
        setalert({variant:'danger',msg:err.response.data})
        setTimeout(()=>{
          setalert(null)
        },4000)
      }
    })
  }
  return (
    <div className="app__login">
        <div className="grid">
      <form onSubmit={send}  className="form login">
        { alert && <Alert variant={alert.variant} >{alert.msg}</Alert>}
        <div className="form__field">
          <label htmlFor="login__username"><svg className="icon">
              <AiOutlineUserDelete/>
            </svg><span className="hidden">Username</span></label>
          <input    onChange={formchange} autoComplete="username" id="login__username" type="text" name="username" className="form__input" placeholder="Username" required />
        </div>

        <div className="form__field">
          <label htmlFor="login__email"><svg className="icon">
             <AiOutlineMail/>
            </svg><span className="hidden">Email</span></label>
          <input   onChange={formchange} id="login__password" type="email" name="email" className="form__input" placeholder="Email" required />
        </div>

        <div className="form__field">
          <label htmlFor="login__password"><svg className="icon">
             <AiFillLock/>
            </svg><span className="hidden">Password</span></label>
          <input   onChange={formchange} id="login__password" type="password" name="password" className="form__input" placeholder="Password" required />
        </div>

        <div className="form__field">
          <input  type="submit" value="Register" />
        </div>
      </form>
      <p className="text--center">Member ? <Link to="/login"> Login now</Link> <svg className="icon">
            <AiOutlineArrowRight/>
      </svg></p>
    </div>
    </div>
  )
}

export default Register