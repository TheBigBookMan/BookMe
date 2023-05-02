package dev.smerd.bookme;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

// @Document lets the compiler know this is referencing the collection of Mongo for "movies"
// this class is copying the data properties--- check mongodb to match up properties
@Document(collection="books")
//@Data from lmbok package gives all these variables getters and setters
@Data
//@AllArgsConsctrucor creates an automatic constructor taking in all args
@AllArgsConstructor
//@noArgsConstructor creates an autmoatic constructor but without any args
@NoArgsConstructor
public class Book {
    //    @Id lets compiler know that objectId is reference to the id
    @Id
    private ObjectId id;
    private String bookId;
    private String title;
    private List<String> authors;
    private List<String> categories;
    private String description;
    private String image;
    private String publishedDate;
    private double rating;
    private String subtitle;
    //    from the Comment class-- one-to-many relationship
//    @DocumentReference references the Comment class through mongodb
    @DocumentReference
    private List<Comment> commentIds;
}
