import React from 'react'


function Sponsor({logo, alt}) {
  return(
    <div className="sponsors__container">
      <img className="sponsor__img" src={logo} alt={alt}/>
    </div>
  )
}

export default Sponsor
