import { Component, inject } from '@angular/core';
import { FrontEndApi } from '../../../../core/services/front-end-api';

@Component({
  selector: 'shop-navbar',
  standalone: true,
  imports: [

  ],
  templateUrl: './shop-navbar.html',
  styleUrl: './shop-navbar.css'
})
export class Navbar {

  frontEnd_service = inject(FrontEndApi);
  nav:any;
  logo!:string;

  ngOnInit(): void {
    this.nav = this.frontEnd_service.getNavSections();
    this.logo = this.frontEnd_service.getNavLogo();

  }

}
