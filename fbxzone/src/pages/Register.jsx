import React,{useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../CSS/Register.module.css'

function Register() {
    const [uname, setUname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        const form = document.querySelector('form')
        e.preventDefault()
        axios.post(
          {
            baseURL:'https://server-steel-one.vercel.app/register',
            headers:{
              'Access-Control-Allow-Origin': '*'
            }
          },
          {uname,email,password})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
        form.reset()
        navigate('/login')
    }
  return (
    <div className={styles.divd}>
        <form className={styles.formf} onSubmit={handleSubmit}>
            <h1 className={styles.top}>Register</h1><br/>
            <label className={styles.label}>UserName</label><br/><br/>
            <input className='rounded-3' type="text" name="" id="" placeholder='UserName' onChange={(e)=>setUname(e.target.value)}/><br/><br/>
            <label className={styles.label}>Email</label><br/><br/>
            <input className='rounded-3' type="email" name="" id="" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <label className={styles.label}>Password</label><br/><br/>
            <input className='rounded-3' type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
            <button className='btn btn-outline-light'>Register</button><br/><br/>
            <p className={styles.p}>Already Registered ? Click here to <Link to='/login' style={{color:"white"}}>Login</Link>.</p>
        </form>
    </div>
  )
}

export default Register