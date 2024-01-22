import React from 'react'
import './footer.css'
import Logo from '../Logo/Logo'
import { AppleStore, GooglePlay } from '../../assets'

function Footer() {
  return (
    <div className='footerWrapper'>
     <div className="first">
        <div className="firstInfo">
         <Logo />
         <p>ClearLink is your gateway to effortless, <br /> high-quality video conferencing. Join us in <br /> shaping the future of communication!</p>
        </div>
     </div>

     <div className="second">
        <div className="item">
         <ul>
            <h4> Product </h4>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
         </ul>
        </div>
        <div className="item">
         <ul>
            <h4> Company </h4>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
         </ul>
        </div>
        <div className="item">
         <ul>
            <h4> Resources </h4>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
         </ul>
        </div>
        <div className="item">
         <ul>
            <h4> Legal </h4>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
         </ul>
        </div>
     </div>

     <div className="third">
        <h4>Get the app</h4>
        <img src={AppleStore} alt="" />

        <div className="googlePlay">
        <img src={GooglePlay} alt="" />
         <div className="info">
            <p>GET IT ON</p>
            <p>Google Play</p>
         </div>
         
        </div>
     </div>
    </div>
  )
}

export default Footer
