import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { SimpleBookService } from 'src/app/services/simple-book-service';

@Component({
  selector: 'book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {

  //private bookService=new SimpleBookService(); //hard coded

  constructor(private bookService:SimpleBookService){} //DI
  



  static id=11;
  addBook(){
    var x= ++BookAddComponent.id;

    var book:Book={
      id: `book-${x}`,
      isbn: `${x}`,
      title: `Book ${x}`,
      author: 'Unknown',
      rating: 4,
      description: 'This is a a dummy book to add book',
      cover: 'book.cover',
    }

    this.bookService.addBook(book);

    console.log('Total Books in Add Book', this.bookService.getAllBooks().length);
    console.log(this.bookService.getAllBooks().map(b=>b.title));
  }

}
