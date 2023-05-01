import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Book = () => {
    const { bookId } = useParams();
    console.log(bookId);

    return (
        <div>
            <h1>book</h1>
        </div>
    );
};

export default Book;
