import { CountriesService } from './../../service/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { first, switchMap } from 'rxjs';
import { Country } from '../../interface/country';

@Component({
  selector: 'country-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{ // OnInit se llama una vez que el componente ha sido inicializado.

  public country?: Country

  constructor(
    private activateRoute: ActivatedRoute, // Servicio propio de Angular
    private CountriesService: CountriesService, // Servicio personalizado para conexion con API
    private router: Router,
  ){}

  // METODO: BUSCAR EL PAIS ESPECIFICO AL PRESIONAR "VER MAS"
  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.CountriesService.searchCountryByAlphaCode( id ) ) // Toma un observable y lo adapta
      )
      .subscribe( country => {

        // Si no existe el pais lo envia a la pagina principal
        if (!country) return this.router.navigateByUrl('');
        return this.country = country;
      
      } );



   /*

   Funcionamiento de la seccion:

   Imaginemos que se tiene la siguiente ruta:
    const routes: Routes = [
      { path: 'country/:id', component: CountryPageComponent }
    ];

    Si navegas a http://tu-dominio.com/country/123, el actula componente, CountryPageComponent, se inicializará y
    ngOnInit se llamará. El ActivatedRoute capturará los parámetros de la URL y params.id será 123.

   */

  }

}

