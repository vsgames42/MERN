import React from 'react'
import Navbar from '../Layout/navbar'
import styles from "../CSS/About.module.css"
import Footer from '../Layout/Footer';
import Carousel1 from '../Layout/Carousel'

function About() {
  return (
    <div>
        <Navbar/>
        <div className={styles.banner} >
          <img className={styles.bimg} src="./FBX-Zone.gif" alt="banner" width="50%"  height="150px"/>
        </div>
        <Carousel1/>
        <center className={styles.cont}>
            <h3>FbxZone is a E-Commerce platform to Buy And Sell 3D models in FBX & RAR Archieves Format.</h3>
            <h3>Fbx models that are used in Blender , Adobe Substance , And More.</h3>
            <h3>If you want a custom model thats not available in the webpage you can send a Request to us</h3>
            <h3>using Contact Us Page.</h3>
            <h3>If you have any Questions about our site reach us using th Contact Us page.</h3>
        </center>
        <Footer/>
    </div>
  )
}

export default About