import { Component, Input } from "@angular/core";
import { Book } from "src/app/models/book";
import { SimpleBookService } from "src/app/services/simple-book-service";

import { ActivatedRoute } from "@angular/router";

@Component({

    selector:'book-details-screen',    
    templateUrl: './book-details-screen.html',
    styleUrls:['./book-details-screen.css'],
            
})
export class BookDetailsScreenComponent{

  constructor(
    private bookService: SimpleBookService,
    private route: ActivatedRoute,
    
    ){}

   public book:Book|null|undefined=null

   public selectedBookId:string='the-accursed-god';

   ngOnInit(){
    
    this.route.params.subscribe( (p:any)=>{
      console.log('p.id',p.id);
      this.book= this.bookService.getBookById(p.id) ;
    });

   

   }

  _ngOnInit(){

   //console.log('this.route.snapshot.params["id"]',this.route.snapshot.params['id']);

    var id = this.route.snapshot.params['id'];
    console.log('id',id);
    
    this.book=this.bookService.getBookById(id);

    console.log('this.book',this.book);
    
  }



  
}