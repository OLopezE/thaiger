import React from 'react'

import { EntreesWrapper } from './Entrees.style'

import entrees from '/assets/logos/thaiger_entrees_logo.png'

const Entrees = () => {
  return (
    <EntreesWrapper>
      <img src={entrees} />

      <h2>ENTRADAS</h2>
    </EntreesWrapper>
  )
}

export default Entrees