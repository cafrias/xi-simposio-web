import React from 'react'

import './Sponsor.sass'

function Sponsor({logo, alt, small}) {
  return(
    <li className={`sponsors__container ${small ? 'sponsors__container--small' : ''}`}>
      <img className="sponsor__img" src={logo} alt={alt}/>
    </li>
  )
}

export default Sponsor
