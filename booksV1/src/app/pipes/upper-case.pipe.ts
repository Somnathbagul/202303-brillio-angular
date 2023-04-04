import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toupper'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    return value.toString().toUpperCase();
  }

}
