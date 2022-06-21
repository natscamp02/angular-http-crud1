import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'about',
        component: AboutComponent
    },

    {
        path: 'products',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'browse'
            },
            {
                path: 'browse',
                component: ProductsComponent,
            },
            {
                path: ':id',
                component: ProductDetailsComponent
            },
            {
                path: 'order/success',
                component: OrderSuccessComponent
            }
        ]
    },

    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
