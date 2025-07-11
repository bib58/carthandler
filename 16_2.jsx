import { useState } from "react";
import { addItems , removeItems } from "./16_3";
import { useDispatch } from "react-redux";


const items = [
    { id: 1, food: "Paneer Tikka", price: 200 },
    { id: 2, food: "Kadhai Paneer", price: 380 },
    { id: 3, food: "Butter Naan", price: 74 },
    { id: 4, food: "Gulab Jamun", price: 28 },
    { id: 5, food: "Rasmalai", price: 400 }
];

export default function Card() {
    const [cartItems, setCartItems] = useState([]);

    const ispatch = useDispatch();

    const toggleCart = (id) => {
        if (cartItems.includes(id)) {
            ispatch(removeItems());
            setCartItems(cartItems.filter(itemId => itemId !== id));
        }
        else {
            ispatch(addItems());
            setCartItems([...cartItems, id]);  // Creates a new array containing all existing items + the new item (id) added at the end.
        }
    }; 

    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>

            {items.map((value) => {
                const isInCart = cartItems.includes(value.id);
                
                return (
                    <div key={value.id} style={{ backgroundColor: "yellowgreen", padding: "10px", width: "200px" }}>
                        <h3>{value.food}</h3>
                        <h4>₹ {value.price}</h4>
                        <button onClick={() => toggleCart(value.id)}>
                            {isInCart ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
