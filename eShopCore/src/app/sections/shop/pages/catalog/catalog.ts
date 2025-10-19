import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'shop-catalog',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    ButtonModule
  ],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {

}
