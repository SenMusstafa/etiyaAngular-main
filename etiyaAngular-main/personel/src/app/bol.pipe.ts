import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'karakterBolme'
})
export class BolPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    if (value) {
      return value.substring(args[0], args[1]);
    } else {
      return ""
    }
  }

}
