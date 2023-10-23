import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  // pure: false
})
export class SortpipePipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((a1, a2) => {
      if (a1[propName] > a2[propName]) {
        return 1
      }
      else {
        return -1
      }
    });
  }

}
