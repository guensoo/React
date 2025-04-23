import { useContext } from "react";
import { Link } from 'react-router-dom'
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  const {items} = useContext(CartContext);
  // 총 개수
  const totalCount = items.reduce((sum, item) => sum + item.quantity,0);
  // 총 합
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity),0)

  return (
    <div>
      <Link to={'/products'}>Products</Link>
      <span> | </span>
      <Link to={'/cart'}>Cart({totalCount}) - {totalPrice}원</Link>
    </div>
  )
}

export default Header;