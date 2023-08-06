import React from 'react'

import { EntreesTitle, EntreesWrapper } from './PrototypeEntrees.style';
import PrototypeDish from '../../components/prototypeDish';
import entrees from './entrees';

import { DetailLayout } from '../../components';

const PrototypeEntrees = () => {
  return (
    <DetailLayout>
      <div>
        <EntreesWrapper>
          <h1>LOGO</h1>

          {entrees.map(entree => (
            <PrototypeDish dish={entree}/>
            ))}
        </EntreesWrapper>
      </div>

      <EntreesTitle>ENTRADAS</EntreesTitle>
    </DetailLayout>
  )
}

export default PrototypeEntrees