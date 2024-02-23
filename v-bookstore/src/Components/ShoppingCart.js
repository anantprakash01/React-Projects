// components/ShoppingCart.js
import React, { useState } from 'react';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Placeholder function to add items to the shopping cart
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
