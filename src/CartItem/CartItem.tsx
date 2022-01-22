import { Wrapper } from "./CartItem.style";
import Button from '@mui/material/Button';
import { CartItemType } from "../App";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => {

  return(
    <Wrapper>
      <Button
        size="small"
        disableElevation
        variant='contained'>
          +
      </Button>
      <Button
        size="small"
        disableElevation
        variant='contained'>
          -
      </Button>
    </Wrapper>
  );
  };

export default CartItem