import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interface/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  constructor(private http: HttpClient) { }



  // URL DE API POR CAPITAL
  private apiUrl: string = 'https://restcountries.com/v3.1'; // solo el segmento principal de la URL



  // METODO: AL PRESIONAR "VER MAS"
  searchCountryByAlphaCode( code:string ): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;

    // Se describe la petición a realizar, solo se describe, aun no se realiza la peticion
    return this.http.get<Country[]>(url)

    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null),
      // Si hay un error se atrapa y se crea un nuevo observable, vacio
      catchError(error => of(null))
    );

  }



  // METODO: HACER PETICION HTTP POR CAPITAL
  searchCapital(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${term}`;

    // Se describe la petición a realizar, solo se describe, aun no se realiza
    return this.http.get<Country[]>(url)

    .pipe(
      // Si hay un error se atrapa y se crea un nuevo observable, vacio
      catchError(error => of([]))
    );

  }

  // METODO: HACER PETICION HTTP POR PAIS
  searchCountry(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${term}`;

    // Se describe la petición a realizar, solo se describe, aun no se realiza
    return this.http.get<Country[]>(url)

    .pipe(
      // Si hay un error se atrapa y se crea un nuevo observable, vacio
      catchError(error => of([]))
    );

  }

  // METODO: HACER PETICION HTTP POR REGION
  searchRegion(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${term}`;

    // Se describe la petición a realizar, solo se describe, aun no se realiza
    return this.http.get<Country[]>(url)

    .pipe(
      // Si hay un error se atrapa y se crea un nuevo observable, vacio
      catchError(error => of([]))
    );

  }

}
