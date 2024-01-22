import React from 'react'
import './FooterIcon.css'
import { footerIcon } from '../../constants'
function FooterIcon() {
  return (
    <div className='footerIconWrapper'>
      <div className="first">
        <p>© 2023 ClearLink. All rights reserved.</p>
      </div>

      <div className="second">
        {footerIcon.map(({icon}) => (
            <img src={icon} key={icon} alt={icon} />
        ))}
      </div>
    </div>
  )
}

export default FooterIcon
