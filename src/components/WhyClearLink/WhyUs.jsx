import React from 'react'
import './why.css'
import { WhyUsContents } from '../../constants'
import { handDrawnArrow, whyImages } from '../../assets'


function WhyUs() {
  return (
    <div className='why__wrapper'>
      <span className='headSmall'> The ClearLink Advantage </span>
      
      <h3 className='headBig'>Why choose ClearLink?</h3>
      <h6 className='headMedium'>In a world where connection is everything, ClearLink takes the lead. <br /> Our cutting-edge video conferencing app offers:</h6>

      <img className='arrow' src={handDrawnArrow} alt="arrow" />

      <div className="featuresContainer">
        <div className="first">
            {WhyUsContents.map(({id, title, desc, icon}) => (
                <div className='card' key={id}>
                    <div className="imgWrap">
                        <img src={icon} alt="icon" />
                    </div>
                    <h3> {title} </h3>
                    <span> {desc} </span>
                </div>
            ))}
        </div>

        <div className="second">
            <img src={whyImages} alt="whyImages" />
        </div>
      </div>
    </div>
  )
}

export default WhyUs
