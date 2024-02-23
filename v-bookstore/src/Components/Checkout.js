// components/Checkout.js
import React, { useState } from 'react';

const Checkout = ({ cartItems }) => {
    const [total, setTotal] = useState(0);

    // Handle the case where cartItems is undefined
    if (!cartItems) {
        return <div>Loading...</div>;
    }

    // Calculate the total price of items in the shopping cart
    const calculateTotal = () => {
        const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotal(totalPrice);
    };

    // Placeholder function to simulate the checkout process
    const handleCheckout = () => {
        // Add logic for processing the checkout, e.g., payment, order confirmation
        alert('Checkout completed!');
    };

    return (
        <div>
            <h1>Checkout</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.title} - ${item.price}</li>
                ))}
            </ul>
            <p>Total: ${total}</p>
            <button onClick={calculateTotal}>Calculate Total</button>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default Checkout;
