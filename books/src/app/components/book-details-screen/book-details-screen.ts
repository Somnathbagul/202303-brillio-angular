import { Component, Input } from "@angular/core";
import { Book } from "src/app/models/book";
import { SimpleBookService } from "src/app/services/simple-book-service";


@Component({

    selector:'book-details-screen',    
    templateUrl: './book-details-screen.html',
    styleUrls:['./book-details-screen.css'],
            
})
export class BookDetailsScreenComponent{

  constructor(private bookService: SimpleBookService){}

   public book:Book|null|undefined=null

   @Input() public selectedBookId:string='';

  ngOnInit(){
    this.book=this.bookService.getBookById(this.selectedBookId);
  }

  

  
}