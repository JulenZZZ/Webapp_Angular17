import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ErrorComponent } from './components/error.component';
import { HomeComponent } from './components/home.component';
import { ProductsListComponent } from './components/products-list.component';
import { ProductAddComponent } from './components/product-add.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsListComponent },
    { path: 'add-product', component: ProductAddComponent},
    { path: '**', component: ErrorComponent}
];



