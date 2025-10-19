import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'shop',
        loadComponent: () => import('./sections/shop/pages/catalog/catalog').then(c => c.Catalog)
    },
    {
        path: '**',
        redirectTo: 'shop'
    }
];
