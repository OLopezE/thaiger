import { PrototypeDishWrapper } from "./PrototypeDish.style"

const PrototypeDish = ({ dish }) => {
  return (
    <PrototypeDishWrapper>
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p>{dish.price}</p>
    </PrototypeDishWrapper>
  )
}

export default PrototypeDish;
