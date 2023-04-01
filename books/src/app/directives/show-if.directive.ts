import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[showIf]'
})
export class ShowIfDirective {

  @Input() showIf: boolean=true;

  constructor() { }

}
