import { Component, Input } from '@angular/core';
import { Country } from '../../interface/country';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styles:[
    `img {
      width: 25px;
    }`
  ]
})
export class CountryTableComponent {

  // Se recibira informacion del componente "by-capital" para la tabla
  @Input()
  public countries: Country[] = [];

}
