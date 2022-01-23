import { Wrapper } from "./Item.style";
import { CartItemType } from "../App";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => {
  return (
    <Wrapper>
      <div className="image-wrap">
        <img src={item.image} alt={item.title}/>
      </div>
      <div className="details">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h4>${(item.price).toFixed(2)}</h4>
      </div>
        <button className="add-button" onClick={() => handleAddToCart(item)}>
          Add To Cart
        </button>
    </Wrapper>
  );
};

export default Item

