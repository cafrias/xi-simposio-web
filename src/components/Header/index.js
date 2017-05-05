import React from 'react'

import './Header.sass'

function Header({title}) {
  return (
    <header className="section__header">
      <h2 className="section__title">{title}</h2>
    </header>
  )
}

export default Header
