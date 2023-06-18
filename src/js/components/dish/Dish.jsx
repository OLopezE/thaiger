import React from 'react'

const Dish = ({ dish }) => {
  return (
    <div>
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p>{dish.price}</p>
    </div>
  )
}

export default Dish