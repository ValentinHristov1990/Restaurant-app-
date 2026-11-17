import { useState } from "react";
import { CartContext } from "./cartContext";

export default function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevCart) => [...prevCart, item]);
    }

    const value = { cart: cartItems, addToCart };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}