import React from 'react'
import './hero.css'
import Ai from './Ai'
import { heroVidIcons, reviewAvatar, vidImages } from '../../constants'
import Star from './Star'


function Hero() {
  return (
    <div className='hero__wrapper'>

      <div className="first">
        <h2> Uniting the world, <br />one video at a time </h2>
        <p className='desc'>Experience the future of communication with ClearLink – <br /> where crystal-clear video conferencing meets unparalleled simplicity.</p>

        <div className="trial">
            <button> Start your free trial </button>
            <div className="ai">
                <Ai />
                <span> Discover Ai assistant </span>
            </div>
        </div>

        <div className="review">
        <div className="imgReview">
            {reviewAvatar.map((av) => (
                <div className='review__avatar' key={av.id}>
                    <img src={av.avatar} alt={av.avatar} />
                </div>
            ))}
            </div>

            <div className="starRevieew">
                <div className="star">
                    <Star /> 5.0
                </div>
                <p className='reviewText'>from 3,000+ reviews</p>
            </div>
        </div>

      </div>

      <div className="second">
        <div className="imgCon">
            {vidImages.map((vidImage) => (
                <div className='vidImageWrapper' key={vidImage.id}>
                    <img src={vidImage.img} alt="video" style={{backgroundColor: vidImage.color}} />
                </div>
            ))}
        </div>

        <div className="iconsCon">
            {heroVidIcons.map((icons) => (
                <div className="iconWrapper" key={icons.id}>
                    <img src={icons.icon} alt="icon" />
                </div>
            ))}
        </div>
      </div>

    </div>
  )
}

export default Hero
