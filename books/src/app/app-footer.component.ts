import { Component } from "@angular/core";


@Component({
    selector:'app-footer',
    template:`
        <div>
            &copy; https://conceptarchitect.in
        </div>    
    `,
    styles:[
        `
            div{
                text-align:center;
                border-top: 2px solid teal;
                position: fixed;
                left: 0px;
                right:0px;
                bottom:0px;
                height:40px;
                padding-top:10px;
                
            }
        `
    ]
})
export class AppFooterComponent{
   
}