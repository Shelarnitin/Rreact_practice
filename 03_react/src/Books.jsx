import { useState } from "react";

export default function BooksList () {
    const books = ['Book 1', 'Book 2', 'Book 3', 'Book 4'];


    return (
        <ul>
            {books.map((bookItem) => (
                <li key={bookItem}>{bookItem}</li>
            ))}
        </ul>
    )
}