package dev.smerd.bookme;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

// annotate it is a repositry
// the extend of mongoRepsotiroy gets the findAll method which gets all the Objects back from the mongo
// extending mongoRepository gives access to the mongo database commands like findAll, create etc
@Repository
public interface BookRepository extends MongoRepository<Book, ObjectId> {

}
