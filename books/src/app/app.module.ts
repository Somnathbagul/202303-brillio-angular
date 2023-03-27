import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppFooterComponent } from "./app-footer.component";
import { AppHeaderComponent } from "./app-header.component";
import { AppComponent } from "./app.component";
import { BooksHomeScreenComponent } from "./books-home-screen.component";


@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        BooksHomeScreenComponent,
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent
    ],
    bootstrap:[
        AppComponent,
    ]
})
export class AppModule{

}