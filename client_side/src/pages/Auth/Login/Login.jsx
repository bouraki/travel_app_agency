import React from 'react'
import './Login.scss'
import {AiOutlineUserDelete,AiFillLock,AiOutlineArrowRight} from 'react-icons/ai'
import { useStateContext } from '../../../Context/StateContext'
import Admin from '../../../Dashboard/Admin'
import {Link} from 'react-router-dom'


const Login = () => {
   const {username,setUserName} = useStateContext()
   if(username){
    return <Admin/>
   }
  return (
    <div className="app__login">
        <div className="grid">
      <form  className="form login">

        <div className="form__field">
          <label htmlFor="login__username"><svg className="icon">
              <AiOutlineUserDelete/>
            </svg><span className="hidden">Username</span></label>
          <input autoComplete="username" id="login__username" type="text" name="username" className="form__input" placeholder="Username" required />
        </div>

        <div className="form__field">
          <label htmlFor="login__password"><svg className="icon">
             <AiFillLock/>
            </svg><span className="hidden">Password</span></label>
          <input id="login__password" type="password" name="password" className="form__input" placeholder="Password" required />
        </div>

        <div className="form__field">
          <input type="submit" value="Sign In" />
        </div>

      </form>
      <p className="text--center">Not a member? <Link to="/register">Register now</Link> <svg className="icon">
          <AiOutlineArrowRight/>
      </svg></p>

      

    </div>
    </div>
  )
}

export default Login