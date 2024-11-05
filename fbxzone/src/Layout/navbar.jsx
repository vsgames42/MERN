import React from 'react';
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';

import styles from '../CSS/navbar.module.css';

function Navbar(){
    return(
        <div className={styles.one}>
            <div>
                <a href='#0'><img src="./fzlogo.png" alt="" width="250px"/></a>
            </div>
            <div className='d-flex' style={{fontSize:"26px",gap:"25px",marginTop:"10px"}}>
                <Link to='/home' style={{textDecoration:"none",color:"white"}}>Home</Link>
                <Link to='/about' style={{textDecoration:"none",color:"white"}}>About</Link>
                <Link to='/contact' style={{textDecoration:"none",color:"white"}}>Contact</Link>
                <Link to='/orders' style={{textDecoration:"none",color:"white"}}>Orders</Link>
                <Link to='/cart' style={{textDecoration:"none",color:"white"}}>Cart</Link>
                <Link to='/sell' style={{textDecoration:"none",color:"white"}}>Sell</Link>
            </div>
            <div className='pt-2'>
                <a href="#6" className='fs-3' style={{color:"white",textDecoration:"none"}}><VscAccount className='pb-1' style={{fontSize:"28px",color:"white"}}/>&nbsp;</a>
            </div>
        </div>
    )
}

export default Navbar