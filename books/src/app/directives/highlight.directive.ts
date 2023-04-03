import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }

  private _highlight='lightyellow';
  private _foreground:string|null=null;

  @Input() set highlight( value:string){
    this._highlight= value;
    this.updateUi()
  }

  @Input() set foreground( value:string){
    this._foreground= value;
    this.updateUi();
  }

  ngOnInit(){
    this.updateUi();
  }

  updateUi(){
    
    
     this.el.nativeElement.style.backgroundColor= this._highlight|| 'lightyellow';
     if(this._foreground)
        this.el.nativeElement.style.color=this._foreground;
  }

}
