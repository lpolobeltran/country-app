import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { CountriesModule } from './countries/countries.module';

// Se definen cada una de las rutas:
const routes: Routes = [ // Esta interfaz viene incluida en Angular

  // // RUTA A HOME-PAGE
  // {
  //   path: '', // Queremos que cuando el URL inicial sea el de home
  //   component: HomePageComponent // Componente, en este caso pagina, a mostrar
  // },

  // // RUTA A ABOUT-PAGE
  // {
  //   path: 'about', // Segmento que se le agrega a la URL, especifica la pagina a mostrar
  //   component: AboutPageComponent // Componente, en este caso pagina, a mostrar
  // },

  // // RUTA A CONTACT-PAGE
  {
     path: 'contact', // Segmento que se le agrega a la URL, especifica la pagina a mostrar
     component: ContactPageComponent // Componente, en este caso pagina, a mostrar
  },

  // RUTA AL MODULO COUNTRIES
  {
    path: 'countries', //
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule) // Al usar este path se carga el modulo country mediante una promesa
  },

  // RUTA POR DEFAULT (SINO HAY NINGUN PATH O CUALQUIER OTRO CASO)
  {
    path: '**', // Segmento que se le agrega a la URL, especifica la pagina a mostrar
    redirectTo: 'countries'
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Solo se configura asi si es el routing principal de la app
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
