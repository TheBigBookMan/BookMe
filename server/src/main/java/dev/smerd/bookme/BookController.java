package dev.smerd.bookme;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

// Controller is the main file for the REST APi endpoints
// annotate as a REST controller
@RestController
// to this route
// requestMapping on a class creates the base path and on methods inside become subpaths connected to base
@RequestMapping("/api/v1/books")
//@CrossOrigin(origins = "http://localhost:5173/*")
public class BookController {
//    finding the bean autmatically of the bookService
    @Autowired
    private BookService bookService;

    //    @GetMapping returns the information to the webpage
//    this one has no path as its the base path of the class
    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        return new ResponseEntity<List<Book>>(bookService.allBooks(), HttpStatus.OK);
    }

    //    searching a book by id in getMapping you have the id as a parameter
//    mapping on an object attache this path to the base path of the class
    @GetMapping("/{bookId}")
    //    @PathVariable lets the compiler know passing a path variable in as a parameter
//    Optional<Movie> is in case the movie database doesnt match the imdbId
    public ResponseEntity<Optional<Book>> getSingleBook(@PathVariable String bookId) {
        return new ResponseEntity<Optional<Book>>(bookService.singleBook(bookId), HttpStatus.OK);
    }
}
