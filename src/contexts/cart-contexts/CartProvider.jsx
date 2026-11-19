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
            return prevCart.map((line, i) => {
                if (i !== index) return line;

                const qty = line.options.qty + 1;
                return {
                    ...line,
                    options: { ...line.options, qty },
                    totalPrice: line.unitPrice * qty,
                };
            });
        });
    };

    const decrementQty = (index) => {
        setCartItems((prevCart) => {
            return prevCart.map((line, i) => {
                if (i !== index) return line;

                const qty = Math.max(1, line.options.qty - 1);
                return {
                    ...line,
                    options: { ...line.options, qty },
                    totalPrice: line.unitPrice * qty,
                };
            });
        });
    };

    const totalOrderPrice = cartItems.reduce(
        (total, line) => total + line.totalPrice,
        0
    );

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        incrementQty,
        decrementQty,
        totalOrderPrice,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};