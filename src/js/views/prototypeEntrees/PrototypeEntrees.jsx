import React, { Fragment } from 'react'

import { EntreesTitle, EntreesWrapper } from './PrototypeEntrees.style';
import PrototypeDish from '../../components/prototypeDish';
import entrees from './entrees';

const PrototypeEntrees = () => {
  return (
    <Fragment>
      <div>
        <EntreesWrapper>
          <h1>LOGO</h1>

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