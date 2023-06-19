import React from 'react'

import saladsLogo from '/assets/logos/thaiger_salads_logo.png'

import { SaladsWrapper, SaladsGrid } from './Salads.style'

import Dish from '../../components/dish/Dish'

const Salads = () => {
  const salads = [
    {
      name: 'Som Tam',
      description: 'Esta es una descripción.',
      price: 123
    },
    {
      name: 'Ensalada',
      description: 'Esta es una descripción.',
      price: 123
    },
    {
      name: 'Ensalada',
      description: 'Esta es una descripción.',
      price: 123
    },
    {
      name: 'Ensalada',
      description: 'Esta es una descripción.',
      price: 123
    },
  ]
  return (
    <SaladsWrapper>
      <img src={saladsLogo} style={{ maxWidth: '10rem'}} />

      <h2>ENSALADAS</h2>

      <SaladsGrid>
        {salads.map(entree => (
          <Dish dish={entree}/>
        ))}
      </SaladsGrid>
    </SaladsWrapper>
  )
}

export default Salads