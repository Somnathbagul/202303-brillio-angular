import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[showIf]'
})
export class ShowIfDirective {
  
  constructor(private el:ElementRef) { 
     
  }
 
  @Input() set showIf(value:boolean){

    if(value)
      this.el.nativeElement.removeAttribute('hidden'); 
      //this.el.nativeElement.style.display = 'block';
    else
      //this.el.nativeElement.style.display = 'none';
      this.el.nativeElement.setAttribute('hidden',true);

  }


}
