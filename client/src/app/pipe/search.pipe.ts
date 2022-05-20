import { Pipe, PipeTransform } from '@angular/core';
import {ISearch} from "../app.component";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: ISearch[], search: string, field: string): ISearch[] {
    if(Boolean(search.length)) {
      return arr.filter( (el: ISearch) => {
        const check = new RegExp(search,"ig").test(el[ field as keyof ISearch ].toLowerCase());
        return check ? el : false;
      })
    }
    return arr;
  }

}
