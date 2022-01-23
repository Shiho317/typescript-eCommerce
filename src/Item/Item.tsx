import { Wrapper } from "./Item.style";
import Button from '@mui/material/Button';
import { CartItemType } from "../App";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "styled-components";

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
        <h4>${item.price}</h4>
      </div>
        <button className="add-button" onClick={() => handleAddToCart(item)}>
          Add To Cart
        </button>
    </Wrapper>
  );
};

export default Item

