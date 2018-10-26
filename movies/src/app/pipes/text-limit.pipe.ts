import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimit'
})
export class TextLimitPipe implements PipeTransform {

  transform(value): any {
    if(value.length>100){
      value=value.slice(0,100)+'...';
    }
    return value;
  }

}
