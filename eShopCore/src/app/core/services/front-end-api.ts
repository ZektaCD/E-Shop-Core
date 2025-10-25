import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrontEndApi {

  private apiUrl = "";
  // estos vienen de la bd con un get
  navSections = [
      {
        label: 'home',
        route: ''
      },
      {
        label: 'tienda',
        route: ''
      },
      {
        label:'contacto',
        route: ''
      }
    ];
    //traigo el logo de la carpeta guardada en la bd del servidor
    navLogo = 'assets/img/logo/default-logo.png';

    getNavLogo():string{
      return this.navLogo;
    }

    getNavSections(): any []{
      return this.navSections;
    }

}
