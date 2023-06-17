import React from 'react'

import nameLogo from '/assets/logos/thaiger_logo.png';
import runesLogo from '/assets/logos/thaiger_logo2.png'
import { FirstPageWrapper, SeparatorLine } from './FirstPage.style';

const FirstPage = () => {
  return (
    <FirstPageWrapper>
      <img src={nameLogo} alt="logo"></img>
      <SeparatorLine />
      <img src={runesLogo} alt='logo' style={{ width: '4rem'}} />
    </FirstPageWrapper>
  )
}

export default FirstPage