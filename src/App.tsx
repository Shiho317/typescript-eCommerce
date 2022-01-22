import { useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import products from './item.json';
import Cart from "./Cart/Cart";
import { Description } from "@mui/icons-material";
import { isConstructorDeclaration } from "typescript";


// export type CartItemType = {
//   id: number;
//   category: string;
//   description: string;
//   image: string;
//   price: number;
//   title: string;
//   amount: number;
// };

export interface CartItemType {
  id: number;
  category: string;
  title: string;
  image: string;
  price: number;
  description: string;
  amount: number;
};

const App = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const getTotalItem = (items: CartItemType[]) => {
    items.reduce((acc: number, items) => acc + items.amount, 0)
  }

  
  return (
    <div>
      <Drawer
        anchor='right'
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}>
          
      </Drawer>
      <div className="header">
        <div className="header-logo">

        </div>
        <div className="header-cart">
          <Badge>
            <ShoppingCartOutlinedIcon/>
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default App;
