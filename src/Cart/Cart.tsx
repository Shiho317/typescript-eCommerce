import { CartItemType } from '../App';
import { Wrapper } from './Cart.style';


type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {

  return(
    <Wrapper>

    </Wrapper>
  );
};

export default Cart