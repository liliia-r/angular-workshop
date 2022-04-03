import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenLettersFormat',
})
export class EvenLettersFormatPipe implements PipeTransform {
  transform(value: string): string {
    return [...value]
      .map((l, i) => ((i + 1) % 2 ? l.toLocaleLowerCase() : l.toUpperCase()))
      .join('');
  }
}
