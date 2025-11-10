import { Routes } from '@angular/router';

export const SHOP_ROUTES: Routes = [
    {
        path: 'shop',
        loadComponent: () => import('./pages/catalog/catalog').then(c => c.Catalog)
    },
    {
        path: 'product',
        loadComponent: () => import('./pages/product-datails-page/product-datails-page').then(c => c.ProductDatailsPage)
    },
    {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart').then(c => c.Cart)
    },
    {
        path: '**',
        redirectTo: 'product'
    }
];