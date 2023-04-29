package dev.smerd.bookme;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

//gets the Book data from the database and returns to the controller
//@Service annotate signifies that it will be talking to the database
@Service
public class BookService {
//    @Autowired looks for the bookRepository bean and injects it into
    @Autowired
    private BookRepository bookRepository;
//    return all books from database
    public List<Book> allBooks() {
        //bookRepositry is extended from mongoRepository and can use findAll to access all data from mongo findAll is the database call
        return bookRepository.findAll();
    }

//    return singular book from database with ObjectId
//    Optional<Book> in case there is no id that matches in database so can return null
    public Optional<Book> singleBook(ObjectId id) {
        return bookRepository.findById(id);
    }

//    CAN ADD IN MORE BY CATEGORY, AUTHOR, TITLE etc
}
