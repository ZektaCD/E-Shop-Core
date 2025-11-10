import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrontEndApi {

  private apiUrl = "";
  #sidebar_state = signal(false);
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

    getSidebarOpenState(): boolean {
      return this.#sidebar_state();
    }

    setSidebarCartState(data: boolean){
      this.#sidebar_state.set(data);
    }

}
