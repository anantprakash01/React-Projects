// components/BookDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        // Placeholder data for demonstration purposes
        const dummyBook = {
            id: 1,
            title: 'Book 1',
            author: 'Author 1',
            price: 20.0,
            // Additional book details
        };

        setBook(dummyBook);
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            {/* Additional book details */}
        </div>
    );
};

export default BookDetails;
