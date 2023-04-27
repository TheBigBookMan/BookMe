package dev.smerd.bookme;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection="books")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    @Id
    private ObjectId id;
    private String title;
    private List<String> authors;
    private List<String> categories;
    private String description;
    private String image;
    private String publishedDate;
    private boolean rating;
    private String subtitle;
    @DocumentReference
    private List<Comment> commentIds;
}
