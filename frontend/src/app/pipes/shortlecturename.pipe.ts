import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortlecturename'
})
export class ShortlecturenamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    return value.split(",")[0] + value.split(",")[1] + value.split(",")[2];
  }

}
