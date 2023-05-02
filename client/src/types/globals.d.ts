export {};

declare global {
    interface Book {
        id: string;
        bookId: string;
        title: string;
        authors: string[];
        categories: string[];
        description: string;
        image: string;
        publishedDate: string;
        rating: number;
        subtitle: string;
        commentIds: Comment[];
    }

    interface CommentProps {
        commentIds: Comment[];
        bookId: string;
    }

    interface Comment {
        id: string;
        commentBody: string;
        upvotes: number;
    }
}
