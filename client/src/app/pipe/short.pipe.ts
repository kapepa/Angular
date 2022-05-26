import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
})
export class ShortPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return String(value).slice(0,8);
  }

}
