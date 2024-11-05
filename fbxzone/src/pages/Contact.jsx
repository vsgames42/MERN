import React from 'react'
import Navbar from '../Layout/navbar'
import Carousel1 from '../Layout/Carousel'
import styles from '../CSS/contact.module.css'
import Footer from '../Layout/Footer';

function Contact() {
  return (
    <div>
        <Navbar/>
        <div className={styles.banner} >
          <img className={styles.bimg} src="./FBX-Zone.gif" alt="banner" width="50%"  height="150px"/>
        </div>
        <Carousel1/>
        <center>
            <h1 className='pt-5' style={{color:"black"}}>Contact Details</h1><br /><br />
            <p className='h4' style={{color:"black"}}>Email : <a className='btn btn-dark' href="mailto:vsgames42@gmail.com">Go to Mail</a></p>
            <p className='h4' style={{color:"black"}}>WhatsApp : <a href='https://wa.me/918870389475' target='blank'><img src="./WhatsAppButtonGreenSmall.png" alt="" width="180px"/></a></p>
            <h1 className='pt-5' style={{color:"black"}}>Location</h1><br /><br />
            <iframe className='rounded-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6907163334567!2d77.78602747569728!3d9.959669873726035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0737006da4eedb%3A0xf13803ffb8f24866!2sVS_FuturePoint!5e0!3m2!1sen!2sin!4v1723881648844!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} title='location' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </center>
        <Footer/>
    </div>
  )
}

export default Contact