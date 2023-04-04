import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app-component/app.component";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { BookDetailsScreenComponent } from "./components/book-details-screen/book-details-screen";
import { BookListComponent } from './components/book-list/book-list.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { RatingAdvisePipe } from './pipes/rating-advise.pipe';
import { RangeComponent } from './components/range/range.component';
import { FormsModule } from "@angular/forms";
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ShowIfDirective } from './directives/show-if.directive';
import { SimpleBookService } from "./services/simple-book-service";
import { BorderDirective } from './directives/border.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { UserLoginScreenComponent } from './components/user-login-screen/user-login-screen.component';
import { UserReisterScreenComponent } from './components/user-reister-screen/user-reister-screen.component';
import { AuthorListScreenComponent } from './components/author-list-screen/author-list-screen.component';
import { AuthorDetailsScreenComponent } from './components/author-details-screen/author-details-screen.component';
import { AuthorAddScreenComponent } from './components/author-add-screen/author-add-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { UserRegisterScreenComponent } from './components/user-register-screen/user-register-screen.component';

import { RouterModule } from "@angular/router";

import appRoute from "./app-routes";
import { E404ScreenComponent } from './components/e404-screen/e404-screen.component';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoute)
    ],
    declarations:[
        BookDetailsScreenComponent,
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        BookListComponent,
        BookAddComponent,
        UpperCasePipe,
        RatingAdvisePipe,
        RangeComponent,
        StarRatingComponent,
        ShowIfDirective,
        BorderDirective,
        HighlightDirective,
        UserLoginScreenComponent,
        UserReisterScreenComponent,
        AuthorListScreenComponent,
        AuthorDetailsScreenComponent,
        AuthorAddScreenComponent,
        HomeScreenComponent,
        UserRegisterScreenComponent,
        E404ScreenComponent
    ],
    providers:[
        SimpleBookService
    ],
    bootstrap:[
        AppComponent,
    ]
})
export class AppModule{

}