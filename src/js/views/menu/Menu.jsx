import React, { Fragment } from 'react';

import { FirstPage, Entrees, Salads } from '../../views';
import { Transitioner } from '../../components';

const Menu = () => {
  return (
    <Fragment>
      <FirstPage />
      <Entrees />
      <Transitioner />
      <Salads />
    </Fragment>
  )
}

export default Menu;
