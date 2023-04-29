export {};

declare global {
    interface Book {
        id: string;
        title: string;
        authors: string[];
        categories: string[];
        description: string;
        image: string;
        publishedDate: string;
        rating: number;
        subtitle: string;
        commentIds: string[];
    }
}