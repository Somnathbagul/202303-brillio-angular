import { Component } from "@angular/core";



@Component({
    selector:'books-app',
    templateUrl:`./app.component.html`
})
export class AppComponent {
    public title="World Wide Books";
    public subTitle='Where books live...'
    public screen="book-list";

    //handleSelectionChange = (screen:string) => this.screen=screen

}
