import { Component } from "@angular/core";



@Component({
    selector:'books-app',
    template:`
        <div>
            <app-header 
                title='World Wide Books'
                slogan='Official Homepage of all books of the world'
            />
            <books-home-screen/>
            <app-footer/>
        </div>
    `
})
export class AppComponent {

}
