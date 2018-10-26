import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mintohrs'
})
export class MintohrsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var num = value;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + ":" + rminutes + "hr(s)";
  }

}
