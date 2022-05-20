import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): unknown {
    const summ = value.reduce(( accum: number, digit: number ) => {
      return accum + Number(digit);
    },0)
    return summ * value.length;
  }

}
