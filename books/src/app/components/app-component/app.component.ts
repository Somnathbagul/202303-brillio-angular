import { Component } from "@angular/core";



@Component({
    selector:'books-app',
    templateUrl:`./app.component.html`
})
export class AppComponent {
    public title="World Wide Books";
    public subTitle='Where books live...'
    public screen="book-list";
    public selectedBookId:string='';

    //handleSelectionChange = (screen:string) => this.screen=screen

    handleBookSelect = (bookId:string) =>{
        this.screen="book-details";
        this.selectedBookId = bookId;
    }

}
