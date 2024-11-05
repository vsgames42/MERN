import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from '../CSS/Carousel.module.css'

function Carousel1() {
  return (
    <div className={styles.carousel}>
        <Carousel data-bs-theme="dark">
          <Carousel.Item interval={5000}>
            <img src="./props.jpg" alt="props" className={styles.cimg}/>
              <Carousel.Caption>
                <h1 className="text-light">Low & High Poly Props</h1>
                <h3 className="text-light">Props sold in FBX Zone can be used in both Game Development And Animation.</h3>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img src="./highpoly.png" alt="highpoly" className={styles.cimg}/>
              <Carousel.Caption>
                <h1 className="text-light">Detailing</h1>
                <h3 className="text-light">Products sold in FBX Zone are Highly Detailed.</h3>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img src="./city.jpg" alt="city" className={styles.cimg}/>
              <Carousel.Caption>
                <h1 className="text-light">Mega Bundle</h1>
                <h3 className="text-light">We sell bundled props in FBX Zone for low Cost to use however you like.</h3>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img src="./3D.jpg" alt="3D" className={styles.cimg}/>
              <Carousel.Caption>
                <h1 className="text-light">Softwares Used in 3D Modelling</h1>
                <h3 className="text-light">Props Sold in FBX Zone created using these softwares.</h3>
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  )
}

export default Carousel1