package dev.smerd.bookme;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="comments")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    @Id
    private ObjectId id;
    private String commentBody;
    private int upvotes;

    // custom constructor that takes just body because objectId auto generated and has @Allargsconstructor
    // and @NoArgsconstructor
    public Comment(String commentBody) {
        this.commentBody = commentBody;
    }
}
