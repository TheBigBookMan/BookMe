import { useState, useEffect } from "react";
import { api } from "./../utils/axios";

const Home = () => {
    const [books, setBooks] = useState<Book[]>([]);

    const getData = async (): Promise<void> => {
        try {
            const response = await api.get("/books");
            const { data } = response;
            setBooks(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;
