// components/BookList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Placeholder data for demonstration purposes
        const dummyBooks = [
            { id: 1, title: 'Book 1', author: 'Author 1', price: 20.0 },
            { id: 2, title: 'Book 2', author: 'Author 2', price: 25.0 },
            { id: 3, title: 'Book 3', author: 'Author 3', price: 30.0 },
        ];

        setBooks(dummyBooks);
    }, []);

    return (
        <div>
            <h1>Virtual Bookstore</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link to={`/book/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
