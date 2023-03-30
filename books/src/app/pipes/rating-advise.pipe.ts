import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingAdvise'
})
export class RatingAdvisePipe implements PipeTransform {

  transform(rating: any, max:any=5,...args: unknown[]): any {
    
    var advices=[
      "Terrible Book. You will regret reading it", //0-0.5
      "Terrible Book. You will regret reading it", //0.5-1
      "Terrible Book. You will regret reading it", //1-1.5
      "Very Bad Book. Don't waste your time", //1.5-2
      "Not great. You surely can find something more interesting",//2-2.5
      "Oridinary book. Read it if you have nothing to do", //2.5-3
      "Good Book. You may read it", //3-3.5
      "Very Good Book. You should read it", //3.4-4.0
      "Excellent Book. You must read it", //4-4.5
      "Brilliant Book. You will regret not reading it"
    ];
    
    rating = +rating; // + tries to conver value to number
    rating =Math.floor(rating*10/max);  //lets make rating out of 10

    console.log(rating, advices[rating]);
    
    return advices[rating];
  }

}
