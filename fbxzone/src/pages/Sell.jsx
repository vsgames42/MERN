import React,{useState} from 'react'
import axios from 'axios'
import Navbar from '../Layout/navbar'
import styles from '../CSS/sell.module.css'
import Footer from '../Layout/Footer'

function Sell() {
    const [pname, setPname] = useState()
    const [aname, setAname] = useState()
    const [price, setPrice] = useState()
    const [pimg, setPimg] = useState()
    const [ptag, setPtag] = useState("2D")
    const [plink, setPlink] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
  
        axios.post(
            {
                baseURL:'https://server-steel-one.vercel.app/sell', 
                headers:{
                    'Access-Control-Allow-Origin': '*'
                }
            },
            {
            ProductName: pname,
            AuthorName: aname,
            Price: price,
            Image: pimg,
            Tag: ptag,
            Link: plink
        })
        form.reset()
    }

    var form = document.getElementById('form')

  return (
    <div>
        <Navbar/>
        <div className={styles.banner} >
            <img className={styles.bimg} src="./FBX-Zone.gif" alt="banner" width="50%"  height="150px"/>
        </div>
        <div className={styles.sell}>
            <div className={styles.note}>
                <h3>Note:</h3>
                <ol type='1'>
                    <li>Create an account in <a href="https://www.imghippo.com/" rel='noreferrer' target='_blank'>ImageHippo.com</a></li>
                    <li>Upload your product photo and share the direct link here</li>
                    <li>Create an account in <a href="https://mega.io/" rel='noreferrer' target='_blank'>Mega.io</a></li>
                    <li>Upload your FBX,OBJ (or) Rar files and share the file link here</li>
                </ol>
            </div>
            <center className='mb-5'>
                <form id='form'>
                <table className={styles.tab}>
                    <tr>
                        <td><label htmlFor="">Product Name :</label></td>
                        <td><input type="text" className='rounded-3' onChange={(e)=>setPname(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Author Name :</label></td>
                        <td><input type="text" className='rounded-3' onChange={(e)=>setAname(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Price :</label></td>
                        <td><input type="number" className='rounded-3' onChange={(e)=>setPrice(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Product Image Link : </label></td>
                        <td><input type="text" name="" id="" className='rounded-3' onChange={(e)=>setPimg(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Tags :</td>
                        <td>
                            <select id='tag'onChange={(e) => setPtag(e.target.value)} defaultValue={ptag}>
                                <option value="2D">2D</option>
                                <option value="3D">3D</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">FBX file link(MEGA) :</label></td>
                        <td><input type="text" name="" id="" className='rounded-3' onChange={(e)=>setPlink(e.target.value)}/></td>
                    </tr>
                </table>
                <button className='btn rounded-2 btn-outline-dark' onClick={handleSubmit}>Sell</button>
                </form>
            </center>
        </div>
        <Footer/>
    </div>
  )
}

export default Sell