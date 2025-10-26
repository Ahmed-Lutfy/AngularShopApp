import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home-component/home-component';
import { CartComponent } from '../components/cart-component/cart-component';
import { CheckoutComponent } from '../components/checkout-component/checkout-component';
import { AboutComponent } from '../components/about-component/about-component';
import { ProductsComponent } from '../components/products-component/products-component';
import { ProductDetailsComponent } from '../components/products-component/product-details-component/product-details-component';
import { ProductListComponent } from '../components/products-component/product-list-component/product-list-component';
import { NotFoundComponent } from '../components/not-found-component/not-found-component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'products', component: ProductsComponent, children:
            [
                { path: 'details', component: ProductDetailsComponent },
                { path: 'list', component: ProductListComponent },
                { path: '', redirectTo: 'list', pathMatch: 'full' }

            ]
    },
    { path: '**', component: NotFoundComponent }

];
