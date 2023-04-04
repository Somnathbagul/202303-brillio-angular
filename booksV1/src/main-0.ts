import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

console.log('Hello Angular World');

@Component({
    selector:'books-app',
    template: "<h1>Book's Web</h1>"
})
class BooksAppComponent{

}

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        BooksAppComponent
    ],
    bootstrap:[
        BooksAppComponent
    ]
})
class AppModule{

}

platformBrowserDynamic().bootstrapModule(AppModule);