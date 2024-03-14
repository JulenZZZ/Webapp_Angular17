import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ErrorComponent } from './components/error.component';
import { HomeComponent } from './components/home.component';
import { ProductsListComponent } from './components/products-list.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDetailsComponent } from './components/product-details.component';
import { ProductEditComponent } from './components/product-edit.component';
import { KendoComponent } from './components/kendo.component';
import { LoginComponent } from './components/login.component';
import { NewAccountComponent } from './components/new-acc.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsListComponent },
    { path: 'add-product', component: ProductAddComponent},
    { path: 'product-details/:id', component: ProductDetailsComponent},
    { path: 'product-edit/:id', component: ProductEditComponent},
    { path: 'kendo', component: KendoComponent},
    { path: 'login', component: LoginComponent},
    { path: 'create-acc', component: NewAccountComponent},
    { path: '**', component: ErrorComponent}
];



