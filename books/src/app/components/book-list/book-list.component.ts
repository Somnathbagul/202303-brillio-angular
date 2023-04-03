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

  //Ok! I can create a new service object
  //that will be different from what other components may be using
  //private bookService=new SimpleBookService();
  
  constructor(private bookService:SimpleBookService){    
    //module please provide me the bookService object that you have
    //I will not create a new one!
    
  }


  ngOnInit(): void {
      
      this.refresh();
  }
  
  refresh(){
    console.log('refreshing...');
    this.books  = this.bookService.getAllBooks();
    console.log('got total ', this.books.length,'books');
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
