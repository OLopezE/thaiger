import { DishWrapper } from "./Dish.style"

const Dish = ({ dish }) => {
  return (
    <DishWrapper>
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p>{dish.price}</p>
    </DishWrapper>
  )
}

export default Dish