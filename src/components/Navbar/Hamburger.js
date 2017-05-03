import React from 'react'

function Hamburger({style}) {
  const {x} = style
  return (
    <svg style={{transform: `scale(${x}, ${x})`}} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
      <g fill="none" fillRule="evenodd" stroke="#9B9B9B" strokeWidth="2" transform="translate(12 15)" strokeLinecap="square">
        <path d="M0 1L24 1M0 9L24 9M0 17L24 17"/>
      </g>
    </svg>
  )
}

export default Hamburger
