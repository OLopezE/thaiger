import { useState } from "react";

import { PrototypeDishWrapper } from "./PrototypeDish.style";
import { FaShrimp, FaEgg, FaPepperHot } from 'react-icons/fa6';
import { GiPeanut } from "react-icons/gi";

const PrototypeDish = ({ dish }) => {
  const [toggleImage, setToggleImage] = useState(false);

  return (
    <PrototypeDishWrapper>
      <div>
        <h3>{dish.name}</h3>
        {dish?.specialIngredients?.includes('shrimp') && <FaShrimp />}
        {dish?.specialIngredients?.includes('egg') && <FaEgg />}
        {dish?.specialIngredients?.includes('pepper') && <FaPepperHot />}
        {dish?.specialIngredients?.includes('peanut') && <GiPeanut />}
        {dish?.image &&
          <button onClick={()=>setToggleImage(!toggleImage)}>
            <img src={dish.image} />
          </button>
        }
      </div>
      <p>{dish.description}</p>
      <p>{dish.price}</p>
      {toggleImage && dish?.image && <img src={dish.image} />}
    </PrototypeDishWrapper>
  )
}

export default PrototypeDish;
