import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../Layout/navbar'
import styles from '../CSS/cart.module.css'



function Cart() {

  let count = 1
  let amount = 0

  const [cartItems, setCartItems] = useState([])

  useEffect(()=>{
    //Fetch cart items
    axios.get('server-steel-one.vercel.app/api/cart')
    .then(res=>setCartItems(res.data))
    .catch(err=>console.log(err))
  },[])

  const removeFromCart = (productId)=>{
    axios.post('server-steel-one.vercel.app/api/cart/remove',{productId})
    .then(()=>{
        axios.get('server-steel-one.vercel.app/api/cart')
        .then(res=>setCartItems(res.data))
    })
    .catch(err=>console.log(err))
  }

  function Amthide()
  {
    let amt1 = document.getElementById('amt')
    amt1.style.display='none'
  }

  const handlePayment = async ()=>{
    try{
        //Create order from backend
        const {data} = await axios.post('server-steel-one.vercel.app/create-order',{
            amount,
            currency: 'INR'
        })
        const {order_id, currency, amount: orderAmount} = data
        const options = {
            key: 'rzp_test_VqxBBYkPy1xQxE', //Razorpay Key_id
            amount: orderAmount,
            currency,
            name:'FBX_Zone',
            description:'1st Transaction',
            order_id,
            handler: async function (response)
            {
                const verifyData = {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature
                }
                try{
                    //Verify payment with backend
                    const result = await axios.post('server-steel-one.vercel.app/verify-payment',verifyData)

                    if (result.data.message === 'Payment successful')
                    {
                        alert('Payment successfull, Download products from orders page.')
                        cartItems.map(prod => axios.post('server-steel-one.vercel.app/order',
                          {
                            Image : prod.productId.Image,
                            ProductName : prod.productId.ProductName,
                            Price : prod.productId.Price,
                            Link : prod.productId.Link
                          }
                        ))
                        setCartItems([])
                        axios.delete('server-steel-one.vercel.app/drop')
                    }
                    else
                    {
                        alert('Payment verification failed')
                    }
                }
                catch (verifyError)
                {
                    console.error("Verification Error: ",verifyError.response ? verifyError.response.data : verifyError.message)
                }
            },
        }
        const rzp1 = new window.Razorpay(options);
        rzp1.open()
    }
    catch(error)
    {
        console.error("Payment Error: ",error.response ? error.response.data : error.message)
    }
  }


  return (
    <>
      <Navbar/>
      <div className={styles.banner} >
          <img className={styles.bimg} src="./FBX-Zone.gif" alt="banner" width="50%"  height="150px"/>
      </div>
      <div className={styles.check}>
        <div>
          <table className={styles.table}>
            <tr>
              <th className={styles.thead}>No.</th>
              <th className={styles.thead}>Product</th>
              <th className={styles.thead}>ProductName</th>
              <th className={styles.thead}>Price</th>
              <th className={styles.thead}>RemoveProduct</th>
            </tr>
            {cartItems.map(item =>(<tr key={item.productId._id}>
              <td className={styles.thead}>{count++}</td>
              <td><img className={styles.image} src={item.productId.Image} alt={item.productId.ProductName}/></td>
              <td><h4 className={styles.thead}>{item.productId.ProductName}</h4></td>
              <td><h4 className={styles.thead}>{item.productId.Price}</h4></td>
              <td><button className='btn btn-outline-light' onClick={()=>removeFromCart(item.productId._id)}>Remove</button></td>
            </tr>))}
          </table>
        </div>
        <div className={styles.check1}>
          <div>
            <h3 className={styles.thead1}>Total Products :</h3>
            <h3 className={styles.thead1}>Total Price :</h3>
          </div>
          <div>
            <h3 className={styles.thead1}>{count-1}</h3>
            <h3 id='amt'>{cartItems.map(items=>(
              <p onLoad={Amthide()} key={items.productId._id}>{amount+=parseInt(items.productId.Price)}</p>
            ))}</h3>
            <input className={styles.inputt} type='text' value={amount} readOnly/>
          </div>
            <button className='btn btn-dark' onClick={handlePayment}>Checkout</button>          
        </div>
      </div>
    </>
  )
}

export default Cart