import { CartContext } from "./cartContext";
import usePersistedState from "../../hooks/usePersistedState";

export default function CartProvider({ children }) {

    const [cartItems, setCartItems] = usePersistedState("cartItems", []);

    const addToCart = (item) => {
        setCartItems((prevCart) => [...prevCart, item]);
    }

    const removeFromCart = (index) => {
        setCartItems((prevCart) => prevCart.filter((_, i) => i !== index));
    }

    const incrementQty = (index) => {
        setCartItems((prevCart) => {
            prevCart.reduce((acc, item, i) => {
                i === index ? item.qty += 1 : item.qty;
                return acc;
            }, []);
        });
    };

    const decrementQty = (index) => {
        setCartItems((prevCart) => {
            prevCart.reduce((acc, item, i) => {
                i === index ? item.qty -= 1 : item.qty;
                return acc;
            }, []);
        });
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        incrementQty,
        decrementQty
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};