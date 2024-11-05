import React, {useEffect, useState} from "react";
import axios from 'axios';
import Navbar from "../Layout/navbar";
import { MdAddShoppingCart } from "react-icons/md";
import styles from '../CSS/Home.module.css';
import Footer from "../Layout/Footer";
import Carousel1 from "../Layout/Carousel";

function Home(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    axios.get('https://server-steel-one.vercel.app/gethome')
    .then(item => setItems(item.data))
    .catch(err => console.log(err))
  },[])
  const addToCart = (productId,price)=>{
    axios.post('https://server-steel-one.vercel.app/api/cart/add',{productId,price})
    .then(data => console.log(data))
    .catch(err=>console.log(err))
    alert('product added to cart.')
  }
  return(
    <>
      <Navbar/>
      <div className={styles.banner} >
        <img className={styles.bimg} src="./FBX-Zone.gif" alt="banner" width="50%"  height="150px"/>
      </div>
      <Carousel1/>
      <div className={styles.card}>
      {
        items.map(data => {
          return <div key={data._id} className={styles.carddiv}>
            <div className={styles.carddiv1}>
            <div>
              <span className={styles.sp}>{data.Tag}</span><br/>
              <img className={styles.image} src={data.Image} alt="" />
            </div>
            <div className={styles.carddiv2}>
              <h6 className={styles.head6}>Title</h6>
              <h5 className={styles.head5}>{data.ProductName}</h5>
              <h6 className={styles.head6}>Authur</h6>
              <h5 className={styles.head5}>{data.AuthorName}</h5>
              <h6 className={styles.head6}>Price</h6>
              <h5 className={styles.head5}>Rs: {data.Price}</h5>
            </div>
            </div>
            <button onClick={()=>addToCart(data._id)} className="btn btn-outline-light" style={{width:"150px",marginLeft:"50px"}}><MdAddShoppingCart/>&nbsp;Add To Cart</button>
          </div>
        })
      }
      </div>
      <Footer/>
    </>
  )
}

export default Home