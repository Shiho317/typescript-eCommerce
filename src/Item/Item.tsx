import { Wrapper } from "./Item.style";
import Button from '@mui/material/Button';
import { CartItemType } from "../App";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => {
  return (
    <Wrapper>

    </Wrapper>
  );
};

export default Item

