import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector:'app-header',
    templateUrl:'./app-header.component.html',
    styleUrls:['./app-header.component.css']

})
export class AppHeaderComponent{
    @Input() public title:String="App Title";
    @Input() public slogan:String="App Slogan";

    @Input() public selection:string='';
    
    @Output() public selectionChange=new EventEmitter<string>();

    onLinkClick(id:string){
        console.log('this.selectionChange',this.selectionChange);        
        this.selectionChange.emit(id);
    }
    
}