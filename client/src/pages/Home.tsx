import { useState, useEffect } from "react";
import { api } from "./../utils/axios";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

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
        <div className="h-full w-full px-4">
            <ul className="flex flex-wrap gap-4 p-4 justify-center">
                {books.map((book) => (
                    <Link
                        to={`/book/${book.bookId}`}
                        className="flex flex-col border-2 p-2 h-[460px] max-w-[400px] overflow-y-auto rounded-lg hover:bg-gray-200 cursor-pointer"
                    >
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
                                        <AiFillStar className="text-yellow-400" />
                                        <p>{book.rating}</p>
                                    </div>
                                </div>
                                <p>{book.subtitle}</p>
                            </div>
                        </div>
                        <p className="text-sm">{book.description}</p>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Home;
