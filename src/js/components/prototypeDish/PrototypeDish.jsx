import { PrototypeDishWrapper } from "./PrototypeDish.style";
import { FaShrimp, FaEgg, FaPepperHot } from 'react-icons/fa6';
import { GiPeanut } from "react-icons/gi";

const PrototypeDish = ({ dish }) => {
  return (
    <PrototypeDishWrapper>
      <h3>{dish.name} <FaShrimp /> <FaEgg /> <FaPepperHot /> <GiPeanut /></h3>
      <p>{dish.description}</p>
      <p>{dish.price}</p>
    </PrototypeDishWrapper>
  )
}

export default PrototypeDish;
