import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  template: `
    <div class='outer' [style.width.px]='+rating/5*100' [title]='rating' >
      <div class='inner' >
        <i *ngFor='let r of ratings' class="fa fa-star"></i>
      <div>
    </div>
  `,
  styles: [
    `
      .outer{
        overflow:hidden;
      }
      .inner{
        max-width:100px;
        min-width:100px;
        padding:0px;
      }
      i, .fa, .fa-star{
        padding:0px;
        margin:0px;
        width:20px;
        color:orange;
      }
    `
  ]
})
export class StarRatingComponent {
  @Input() rating:number|string=5;
  ratings=new Array(5);

}
