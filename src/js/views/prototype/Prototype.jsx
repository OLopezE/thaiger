import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrototypeMenu from '../prototypeMenu'
import PrototypeEntrees from '../prototypeEntrees'

const Prototype = () => {
  return (
    <Routes>
      <Route path="/" element={<PrototypeMenu />} />
      <Route path="/entrees" element={<PrototypeEntrees />} />
    </Routes>
  )
}

export default Prototype