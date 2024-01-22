import React from 'react'
import './companies.css'
import { companies } from '../../constants'


function Companies() {
  return (
    <div className='companies__wrapper'>
      <h4>Join 1,500+ companies already video conferencing the ClearLink way</h4>

      <div className="Companies_image__container">
      {companies.map(({id, logo}) => (
        <div className="imgCon" key={id}>
          <img src={logo} alt={logo} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default Companies
