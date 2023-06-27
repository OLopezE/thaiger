import React, { Fragment } from 'react'

import { EntreesTitle, EntreesWrapper } from './PrototypeEntrees.style';
import PrototypeDish from '../../components/prototypeDish';

const PrototypeEntrees = () => {
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
  ];

  return (
    <Fragment>
      <EntreesWrapper>
        {entrees.map(entree => (
          <PrototypeDish dish={entree}/>
          ))}
      </EntreesWrapper>
      <EntreesTitle>ENTRADAS</EntreesTitle>
    </Fragment>
  )
}

export default PrototypeEntrees