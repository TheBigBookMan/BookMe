import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
    const [books, setBooks] = useState<Book[]>([]);

    const getData = async (): Promise<void> => {
        try {
            const response = await axios.get(
                "http://localhost:8090/api/v1/books"
            );
            const { data } = response;
            setBooks(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    });

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;
