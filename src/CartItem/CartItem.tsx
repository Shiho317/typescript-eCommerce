import { Wrapper } from "./CartItem.style";
import { CartItemType } from "../App";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  removeFromItemList: (id: number) => void;
}

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart, removeFromItemList}) => {

  return(
    <Wrapper>
      <div className="contents-wrap">
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${(item.price).toFixed(2)}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="cart-btn">
          <button onClick={() => removeFromCart(item.id)}
          className="remove-btn">
          -
          </button>
          <p>{item.amount}</p>
          <button onClick={() => addToCart(item)}
          className="add-btn">
          +
          </button>
        </div>
      </div>
      <div className="img-wrap">
        <img src={item.image} alt={item.title}/>
      </div>
      <div className="trash-icon" onClick={() => removeFromItemList(item.id)}>
        <DeleteOutlineIcon/>
      </div>
    </Wrapper>
  );
  };

export default CartItem