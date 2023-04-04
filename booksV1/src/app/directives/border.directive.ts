import { Directive, ElementRef, SimpleChanges } from '@angular/core';

@Directive({
  selector: '.bordered'
})
export class BorderDirective {

  constructor(private el:ElementRef ) { }

  ngOnInit(){
    this.addBorder();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.addBorder();
  }

  addBorder(){

    this.el.nativeElement.style.border = "2px solid black";

  }
}
