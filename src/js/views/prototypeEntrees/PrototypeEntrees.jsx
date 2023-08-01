import React, { Fragment } from 'react'

import { EntreesTitle, EntreesWrapper } from './PrototypeEntrees.style';
import PrototypeDish from '../../components/prototypeDish';
import foodImage from '/assets/images/ARROZ_FRITO_VEGANO.jpg';

const PrototypeEntrees = () => {
  const entrees = [
    {
      name: 'Moo Pings',
      description: 'Brochetas de pierna de cerdo a la parrilla, marinadas con cilantro y especias thai.',
      price: 125,
    },
    {
      name: 'Brochetas de camaron',
      description: 'Brochetas de camaron empanizadas con panko y coco, acompañadas de aderezo de cacahuate tostado y limon',
      price: 129
    },
    {
      name: 'Brochetas de camaron',
      description: 'Brochetas de camaron empanizadas con panko y coco, acompañadas de aderezo de cacahuate tostado y limon',
      price: 129
    },
    {
      name: 'Brochetas de camaron',
      description: 'Brochetas de camaron empanizadas con panko y coco, acompañadas de aderezo de cacahuate tostado y limon',
      price: 129
    },
    {
      name: 'Brochetas de camaron',
      description: 'Brochetas de camaron empanizadas con panko y coco, acompañadas de aderezo de cacahuate tostado y limon',
      price: 129
    },
    {
      name: 'Brochetas de camaron',
      description: 'Brochetas de camaron empanizadas con panko y coco, acompañadas de aderezo de cacahuate tostado y limon',
      price: 129
    },
    {
      name: 'Brochetas de camaron',
      description: 'Brochetas de camaron empanizadas con panko y coco, acompañadas de aderezo de cacahuate tostado y limon',
      price: 129
    },
    {
      name: 'Brochetas de camaron',
      description: 'Brochetas de camaron empanizadas con panko y coco, acompañadas de aderezo de cacahuate tostado y limon',
      price: 129
    }
  ];

  return (
    <Fragment>
      <div>
        <EntreesWrapper>
          {entrees.map(entree => (
            <PrototypeDish dish={entree}/>
            ))}
        </EntreesWrapper>
      </div>

      <EntreesTitle>ENTRADAS</EntreesTitle>
    </Fragment>
  )
}

export default PrototypeEntrees