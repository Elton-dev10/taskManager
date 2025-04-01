import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueResponsibles'
})
export class UniqueResponsiblesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
