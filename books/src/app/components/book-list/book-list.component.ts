import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { SimpleBookService } from 'src/app/services/simple-book-service';
import { RangeChangeParameter } from '../range/range.component';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  constructor(private bookService: SimpleBookService){    
  }


  ngOnInit(): void {
    this.books  = this.bookService.getAllBooks();
  }

  


  showImages=true;    

  public imageHeight=150;

  public books:Book[]=[];





  // handleImageShow(){
  //   this.showImages=!this.showImages; //toggle
  //   console.log('this.showImages',this.showImages);
  // }


    // resize(value: number){
    //   this.imageHeight=value;
    // }

    // handleImageHeightChange(param: RangeChangeParameter){
    //     console.log('param in parent event handler',param);
      
    // }


    
}
