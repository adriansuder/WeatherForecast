import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: number) {

    if (value && !isNaN(value)) {
      let temperature = value - 273.15;
      return temperature.toFixed(0);
    }
  }
}
