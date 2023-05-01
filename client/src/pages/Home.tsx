import { useState, useEffect } from "react";
import { api } from "./../utils/axios";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

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
    console.log(books);
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="h-full w-full p-4">
            <h1 className="font-bold">Book List</h1>

            <ul className="flex flex-col gap-4 p-4">
                {books.map((book) => (
                    <li className="flex flex-col border-2 p-2 h-[460px] overflow-y-auto rounded-lg">
                        <div className="flex gap-2">
                            <div className="flex flex-col gap-1 items-center">
                                <img
                                    src={book.image}
                                    className="w-36 rounded-lg"
                                />
                                <p className="italic">{book.publishedDate}</p>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold">{book.title}</h1>
                                <p className="text-sm italic">
                                    {book.authors.map(
                                        (author) => author + ", "
                                    )}
                                </p>
                                <p>
                                    {book.categories.map(
                                        (category) => category + ", "
                                    )}
                                </p>
                                <div className="flex gap1">
                                    <div className="flex items-center justify-center">
                                        <BiCommentDetail />
                                        <p>{book.commentIds.length}</p>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <AiFillStar className="text-yellow-300" />
                                        <p>{book.rating}</p>
                                    </div>
                                </div>
                                <p>{book.subtitle}</p>
                            </div>
                        </div>
                        <p className="text-sm">{book.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
