import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface RangeChangeParameter{
  direction: "up"|"down";
  delta: number;
  original:number;
  value:number;
};


@Component({
  selector: 'app-range',
  template: `
    <div class='row'>   
      <button (click)="decrease()" class='btn btn-outline col col-4'
        [disabled]="value<=min"
      >
          <i class="fa-solid fa-circle-down" ></i>
      </button>
      <span class='col col-4'>
      {{value}}
      </span>
      <button (click)="increase()" class='btn btn-outline col col-4'
          [disabled]="value>=max"
      >
        <i class="fa-solid fa-circle-up" ></i>
      </button>
    </div>
  `,
  styles: [
  ]
})
export class RangeComponent {

 @Input() public value:number=100;
 @Output() public valueChange=new EventEmitter<number>();

 @Input() public delta:number=1;
 @Input() public min:number=0;
 @Input() public max:number=100;

 @Output() public change=new EventEmitter<RangeChangeParameter>();

  
  increase(){
    this.update(this.delta);
    
  }

  decrease(){
   
    this.update(-this.delta)
  }

  update(d:number){
    var v = this.value + d;
    if(v<this.min)
      v=this.min;
    if(v>this.max)
      v=this.max;
  
    if(v!==this.value){

      this.change.emit({
        direction: d>0?"up":"down",
        delta:this.delta,
        original:this.value,
        value: v
      });

      this.value=v;

      this.valueChange.emit(this.value);
    }

  }

}
