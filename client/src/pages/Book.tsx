import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../utils/axios";
import { AiFillStar } from "react-icons/ai";
import Comments from "./../components/Book/Comments";

const Book = () => {
    const { bookId } = useParams();
    const [bookData, setBookData] = useState<Book>();

    const getBookData = async (): Promise<void> => {
        const { data } = await api.get(`/books/${bookId}`);
        setBookData(data);
    };

    useEffect(() => {
        getBookData();
    }, [bookId]);

    return (
        <div className="p-4">
            {!bookData ? (
                <h1 className="font-bold text-2xl">Loading...</h1>
            ) : (
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center h-[500px]  p-2">
                        <img src={bookData.image} className="w-32 rounded-lg" />
                        <h1 className="font-bold text-2xl">{bookData.title}</h1>
                        <p className="italic">
                            {bookData.authors.map((author) => author + ", ")}
                        </p>
                        <p>
                            {bookData.categories.map(
                                (category) => category + ", "
                            )}
                        </p>
                        <div className="flex gap-2">
                            <div className="flex gap-1 items-center justify-center">
                                <AiFillStar className="text-yellow-500" />
                                <p>{bookData.rating}</p>
                            </div>
                            <p>{bookData.publishedDate}</p>
                        </div>
                        <p>{bookData.subtitle}</p>
                        <p className="overflow-y-auto">
                            {bookData.description}
                        </p>
                    </div>
                    <Comments
                        commentIds={bookData.commentIds}
                        bookId={bookData.bookId}
                    />
                </div>
            )}
        </div>
    );
};

export default Book;
