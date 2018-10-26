import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'iframe'
})
export class IframePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: any): any {
    let youtudeUrl='https://www.youtube.com/embed/';
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtudeUrl+value.key);
  }

}
