import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrototypeMenu from '../prototypeMenu'
import PrototypeEntrees from '../prototypeEntrees'
import PrototypeDishes from '../prototypeDishes'

const Prototype = () => {
  return (
    <Routes>
      <Route path="/" element={<PrototypeMenu />} />
      <Route path="/menu" element={<PrototypeEntrees />} />
      {/* <Route path="/prototype-dishes" element={<PrototypeDishes />} /> */}
      <Route path="*" element={<PrototypeMenu />} />
    </Routes>
  )
}

export default Prototype