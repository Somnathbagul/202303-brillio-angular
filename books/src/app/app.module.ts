import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app-component/app.component";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { BooksHomeScreenComponent } from "./components/books-home-screen/books-home-screen.component";
import { BookListComponent } from './components/book-list/book-list.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { RatingAdvisePipe } from './pipes/rating-advise.pipe';
import { RangeComponent } from './components/range/range.component';


@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        BooksHomeScreenComponent,
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        BookListComponent,
        BookAddComponent,
        UpperCasePipe,
        RatingAdvisePipe,
        RangeComponent
    ],
    bootstrap:[
        AppComponent,
    ]
})
export class AppModule{

}