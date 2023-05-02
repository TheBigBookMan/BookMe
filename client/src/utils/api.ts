import { api } from "./axios";

export const upvote = async (
    commentId: string,
    vote: string
): Promise<void> => {
    try {
        await api.post(`/comments/${vote}/${commentId}`);
    } catch (err) {
        console.log(err);
    }
};

export const deleteComment = async (commentId: string): Promise<void> => {
    try {
        await api.delete(`/comments/${commentId}`);
    } catch (err) {
        console.log(err);
    }
};
