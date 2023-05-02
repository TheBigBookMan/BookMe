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
