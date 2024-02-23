// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update this line
import BookList from './Components/BookList';
import BookDetails from './Components/BookDetails';
import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';

function App() {
    const [cartItems, setCartItems] = useState([]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/book/:id" element={<BookDetails />} />
                <Route
                    path="/cart"
                    element={<ShoppingCart cartItems={cartItems} />} // Pass cartItems to the component
                />
                <Route
                    path="/checkout"
                    element={<Checkout cartItems={cartItems} />} // Pass cartItems to the component
                />
            </Routes>
        </Router>
    );
}

export default App;