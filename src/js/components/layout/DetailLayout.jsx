import React from 'react'

import Layout from './DetailLayout.style';

import { useNavigate } from 'react-router-dom';

const DetailLayout = ({ children }) => {
  const navigate = useNavigate()

  return (
    <Layout>
      <button
        onClick={()=>navigate('/')}
      >
        <span />
        <span />
        <span />
      </button>
      {children}
    </Layout>
  )
}

export default DetailLayout