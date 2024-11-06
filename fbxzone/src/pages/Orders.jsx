import React,{useState, useEffect} from 'react'
import Navbar from '../Layout/navbar'
import axios from 'axios'
import styles from '../CSS/orders.module.css'

function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(()=>{
    axios.get(
      {
        baseURL:'https://server-steel-one.vercel.app/getorder',
        headers:{
          'Access-Control-Allow-Origin': '*'
        }
      }
      )
    .then(item=>setOrders(item.data))
    .catch(err=>console.log(err))
  },[])

  return (
    <div>
        <Navbar/>
        <div className={styles.banner} >
          <img className={styles.bimg} src="./FBX-Zone.gif" alt="banner" width="50%"  height="150px"/>
        </div>
      <div className='d-flex justify-content-center'>
            <table className={styles.table}>
              <tr>
                <th className={styles.head}>Product</th>
                <th className={styles.head}>Product Name</th>
                <th className={styles.head}>Price</th>
                <th className={styles.head}>Download</th>
              </tr>
              {orders.map(data => {
                return <tr key={data._id}>
                <td><img className={styles.image} src={data.Image} alt="" /></td>
                <td><h3 className={styles.head}>{data.ProductName}</h3></td>
                <td><h3 className={styles.head}>{data.Price}</h3></td>
                <td><a className='btn btn-outline-light' target='_blank' rel='noreferrer' href={data.Link}>Download</a></td>
              </tr>})}
            </table>
            </div>
    </div>
  )
}

export default Orders