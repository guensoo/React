import { useContext, createContext, useState } from "react"; 

const CartContext = createContext();

const CartProvider = ({children}) => {
  const[items, setItems] = useState([]);
  const[quantity, setQuantity] = useState(0);

  let addItem = () => {
    setItems(items => items+addItem)
  }
  
  let removeItem = () => {
    setItems(items => items-removeItem)
  }
  
  let updateQuantity = () => {
    if(setQuantity == '+'){
      setQuantity(quantity => quantity+1)
    }
    else{
      setQuantity(quantity => quantity-1)
    }
  }
  
  let clearCart = () => {
  
  }
  
  export const products = [
    { id: '1', name: 'Laptop', price: 1200000 },
    { id: '2', name: 'Smartphone', price: 800000 },
    { id: '3', name: 'Headphones', price: 150000 },
    ];

    return (
      <CartContext.Provider value={{items, setItems}}>
        {children}
      </CartContext.Provider>
    )
}

