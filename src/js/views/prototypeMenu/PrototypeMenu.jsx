import React from 'react'
import { Link } from 'react-router-dom'

import { MainMenuLayout } from './PrototypeMenu.style'

const PrototypeMenu = () => {
  return (
    <MainMenuLayout>
      <Link to="/entrees" >ENTRADAS</Link>
      <Link to="/" >ENSALADAS</Link>
      <Link to="/" >FUERTES</Link>
      <Link to="/" >POSTRES</Link>
      <Link to="/" >BEBIDAS</Link>
    </MainMenuLayout>
  )
}

export default PrototypeMenu