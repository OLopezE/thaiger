import React, { Fragment } from 'react'

import { EntreesWrapper } from '../prototypeEntrees/PrototypeEntrees.style';
import { PrototypeTitle } from './PrototypeDishes.style';
import PrototypeDish from '../../components/prototypeDish';

import foodImage from '/assets/images/ARROZ_FRITO_VEGANO.jpg';

const PrototypeDishes = () => {
  const entrees = [
    {
      name: 'TestDish',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo',
      price: 125,
      specialIngredients: ['shrimp', 'pepper', 'egg', 'peanut']
    },
    {
      name: 'TestDish',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo',
      price: 125,
      specialIngredients: ['shrimp', 'pepper']
    },
    {
      name: 'TestDish',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo',
      price: 125,
      specialIngredients: ['egg']
    },
    {
      name: 'TestDish',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo',
      price: 125,
      image: foodImage
    },
  ];

  return (
    <Fragment>
      <EntreesWrapper>
        {entrees.map(entree => (
          <PrototypeDish dish={entree}/>
          ))}
      </EntreesWrapper>
      <PrototypeTitle>PLATILLOS DE PRUEBA</PrototypeTitle>
    </Fragment>
  )
}

export default PrototypeDishes