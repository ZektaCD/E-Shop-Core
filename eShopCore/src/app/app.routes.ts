import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./sections/shop/shop.routes').then(c => c.SHOP_ROUTES)
    },
    // {
    //     path: 'admin',
    //     loadComponent: () => import('./sections/shop/pages/catalog/catalog').then(c => c.Catalog)
    // },
    {
        path: '**',
        redirectTo: ''
    }
];
