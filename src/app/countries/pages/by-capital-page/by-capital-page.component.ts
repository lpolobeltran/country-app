import { Country } from '../../interface/country';
import { CountriesService } from './../../service/countries.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  // Variable para al macenar los "contries" de la subscripcion al usar el servicio "countriesService"
  public countries: Country[] = [];



  // Se inyecta el servicio "countries" en este componente para poder usarlo y buscar el pais mediante su capital
  constructor(private countriesService: CountriesService) {}



  // Metodo a ejecutar cuando se tenga el mensaje enviado por el hijo
  searchByCapital(term: string):void {

    // Se usa el sevicio "countries" pasandole el termino a buscar
    this.countriesService.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries;
    } )

  }

}
