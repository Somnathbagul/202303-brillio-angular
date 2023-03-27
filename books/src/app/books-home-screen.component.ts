import { Component } from "@angular/core";


@Component({
    selector:'books-home-screen',
    
    template: 
            `
                <div>
                    <h2>Our Recommended Books</h2>
                    <p>Here you will get a recommendation of {{books.length}} of our favorite books</p>
                </div>
            `,   
})
export class BooksHomeScreenComponent{

    public books=[
        {title: 'The Accursed God', author:'Vivek Dutta Mishra'},
        {title: 'Rashmirathi', author:'Ramdhari Singh Dinkar'},
        {title: 'Manas', author:'Vivek Dutta Mishra'},
        {title: 'Kurukshetra', author:'Ramdhari Singh Dinkar'},
    ]
  
}