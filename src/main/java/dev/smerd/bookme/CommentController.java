package dev.smerd.bookme;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("api/v1/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;
    //    post request with @PostMapping, request body has the Map (object)
    @PostMapping
    public ResponseEntity<Comment> createComment(@RequestBody Map<String, String> payload) {
        //        the return will contain the reviewBody and bookId
        return new ResponseEntity<Comment>(commentService.createComment(payload.get("commentBody"), payload.get("bookId")), HttpStatus.CREATED);
    }

    @PostMapping("upvote/{commentId}")
    public void upvoteComment(@PathVariable ObjectId commentId) {
        commentService.upvote(commentId);
    }
}
