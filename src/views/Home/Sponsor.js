import React from 'react'


function Sponsor({logo, alt, small}) {
  return(
    <div className={`sponsors__container ${small ? 'sponsors__container--small' : ''}`}>
      <img className="sponsor__img" src={logo} alt={alt}/>
    </div>
  )
}

export default Sponsor
