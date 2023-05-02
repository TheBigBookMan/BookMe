import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../utils/axios";

const Book = () => {
    const { bookId } = useParams();
    const [bookData, setBookData] = useState<Book>();

    const getBook = async (): Promise<void> => {
        try {
            const { data } = await api.get(`/books/${bookId}`);
            setBookData({ ...data });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getBook();
    }, []);

    console.log(bookData);
    return (
        <div>
            <h1>book</h1>
        </div>
    );
};

export default Book;
