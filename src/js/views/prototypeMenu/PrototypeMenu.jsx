import React from 'react'
import { Link } from 'react-router-dom'

import { MainMenuLayout } from './PrototypeMenu.style'

const PrototypeMenu = () => {
  return (
    <MainMenuLayout>
      <Link to="/inicio" >INICIO</Link>
      <Link to="/menu" >MENU</Link>
      <Link to="/historia" >HISTORIA</Link>
      <Link to="/galeria">GALERIA</Link>
      <Link to="/nosotros" >NOSOTROS</Link>
    </MainMenuLayout>
  )
}

export default PrototypeMenu