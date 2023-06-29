import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrototypeMenu from '../prototypeMenu'
import PrototypeEntrees from '../prototypeEntrees'
import PrototypeDishes from '../prototypeDishes'

const Prototype = () => {
  return (
    <Routes>
      <Route path="/" element={<PrototypeMenu />} />
      <Route path="/entrees" element={<PrototypeEntrees />} />
      <Route path="/prototype-dishes" element={<PrototypeDishes />} />
    </Routes>
  )
}

export default Prototype