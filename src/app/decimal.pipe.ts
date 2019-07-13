import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalPipeConverter'
})
export class DecimalConverterPipe implements PipeTransform {

  transform(value: number) {

    if (value && !isNaN(value)) {
      return value.toFixed(0);
    }
  }
}
