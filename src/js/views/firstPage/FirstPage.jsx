import React, { Fragment } from 'react'

import nameLogo from '/assets/logos/thaiger_logo.png';
import runesLogo from '/assets/logos/thaiger_logo2.png'
import rocks from '/assets/logos/thaiger_rocks.png'
import { FirstPageWrapper, SeparatorLine } from './FirstPage.style';

const FirstPage = () => {
  return (
      <FirstPageWrapper>
        <img src={nameLogo} alt="logo" style={{ maxWidth: '12rem'}} />
        <SeparatorLine />
        <img src={runesLogo} alt='logo' style={{ maxWidth: '4rem'}} />
        <img src={rocks} />
      </FirstPageWrapper>

  )
}

export default FirstPage