import { PrototypeDishWrapper } from "./PrototypeDish.style";
import { FaShrimp, FaEgg, FaPepperHot } from 'react-icons/fa6';
import { GiPeanut } from "react-icons/gi";

const PrototypeDish = ({ dish }) => {
  return (
    <PrototypeDishWrapper>
      <h3>
        {dish.name}
        {dish.specialIngredients.includes('shrimp') && <FaShrimp />}
        {dish.specialIngredients.includes('egg') && <FaEgg />}
        {dish.specialIngredients.includes('pepper') && <FaPepperHot />}
        {dish.specialIngredients.includes('peanut') && <GiPeanut />}
      </h3>
      <p>{dish.description}</p>
      <p>{dish.price}</p>
      {dish?.image && <img src={dish.image} width={100} height={100}></img>}
    </PrototypeDishWrapper>
  )
}

export default PrototypeDish;
