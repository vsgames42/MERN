import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styles from '../CSS/Login.module.css'

function Login() {
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        const form = document.querySelector('form')
        e.preventDefault()
        axios.post(
            {
                baseURL:'https://server-steel-one.vercel.app/login',
                headers:{
                    'Access-Control-Allow-Origin' : '*',
                    "Access-Control-Allow-Credentials" : "true"
                    "Access-Control-Allow-Methods" : "POST",
                    "Access-Control-Allow-Headers" : "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
                },
            },
            {email,password})
        .then(result=>{console.log(result)
            if(result.data==='success')
            {
                navigate('/home')
            }

        })
        .catch(err=>console.log(err))
        form.reset()
    }
  return (
    <div className={styles.divd}>
        <form className={styles.formf} onSubmit={handleSubmit}>
            <h1 className={styles.top}>Login</h1><br/>
            <label className={styles.label}>Email</label><br/><br/>
            <input className='rounded-3' type="email" name="" id="" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <label className={styles.label}>Password</label><br/><br/>
            <input className='rounded-3' type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
            <button className='btn btn-outline-light'>Login</button><br/><br/>
            <p className={styles.p}>Click here to <Link to='/' style={{color:"white"}}>Register</Link>.</p>
        </form>
    </div>
  )
}

export default Login
