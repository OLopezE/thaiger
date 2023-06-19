import React from 'react'

import { EntreesWrapper, EntreesGrid } from './Entrees.style'

import Dish from '../../components/dish/Dish'

import entreeslogo from '/assets/logos/thaiger_entrees_logo.png';

const Entrees = () => {
  const entrees = [
    {
      name: 'Moo Pings',
      description: 'Brochetas de pierna de cerdo a la parrilla, marinadas con cilantro y especias thai.',
      price: 125
    },
    {
      name: 'Brochetas de camarón',
      description: 'Brochetas de camarón empanizadas con panko y coco, acompañadas de aderezo de cacahuate tostado y limón',
      price: 129
    },
    {
      name: 'Brochetas de camarón',
      description: 'Brochetas de camarón empanizadas con panko y coco, acompañadas de aderezo de cacahuate tostado y limón',
      price: 129
    },
    {
      name: 'Brochetas de camarón',
      description: 'Brochetas de camarón empanizadas con panko y coco, acompañadas de aderezo de cacahuate tostado y limón',
      price: 129
    },
    {
      name: 'Brochetas de camarón',
      description: 'Brochetas de camarón empanizadas con panko y coco, acompañadas de aderezo de cacahuate tostado y limón',
      price: 129
    }
  ]

  return (
    <EntreesWrapper>
      <img src={entreeslogo} style={{ maxWidth: '8rem'}} />

      <h2>ENTRADAS</h2>

      <EntreesGrid>
        {entrees.map(entree => (
          <Dish dish={entree}/>
        ))}
      </EntreesGrid>

    </EntreesWrapper>
  )
}

export default Entrees