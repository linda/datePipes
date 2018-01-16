import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: string, interval: any): any {
    if(!value) {
      return value;
    }
    switch(interval) {
      case 'year':
        return value.substring(0, value.indexOf('-'));
      case 'quarter':
        const date = new Date(value);
        let quarter: number;
        if(date.getMonth() < 3){ // 0,1,2 -> first quarter
          quarter = 1;
        } else if(date.getMonth() < 6) { // 3,4,5 -> second quarter
          quarter = 2;
        } else if(date.getMonth() < 9) { // 6,7,8 -> third quarter
          quarter = 3;
        } else { // 9,10,11 -> fourth quarter
          quarter = 4;
        }

        return quarter + '.' + ' Quartal ' + value.substring(0, value.indexOf('-'));
      case 'month':
        const arr = value.split('-');
        const year = arr[0];
        const month = arr[1];
        return month + '/' + year;
      default:
        return value;
    }
  }

}
