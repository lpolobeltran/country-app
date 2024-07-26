import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interface/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  constructor(private http: HttpClient) { }



  // URL DE API POR CAPITAL
  private apiUrlCapital: string = 'https://restcountries.com/v3.1'; // solo el segmento principal de la URL

  // URL DE API POR PAIS
  private apiUrlPais: string = 'https://restcountries.com/v3.1/name/'; // solo el segmento principal de la URL



  // METODO: HACER PETICION HTTP POR CAPITAL
  searchCapital(term: string): Observable<Country[]> {

    const url = `${this.apiUrlCapital}/capital/${term}`;

    // Se describe la petición a realizar, solo se describe, aun no se realiza
    return this.http.get<Country[]>(url)

    .pipe(
      // Si hay un error se atrapa y se crea un nuevo observable, vacio
      catchError(error => of([]))
    );

  }

}
