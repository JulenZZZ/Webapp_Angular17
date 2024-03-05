import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductsListComponent } from './components/products-list.component';
import { GLOBAL} from './services/global';
import { HttpClientModule,provideHttpClient } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details.component';
import { ProductEditComponent } from './components/product-edit.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, ErrorComponent, RouterModule, ProductsListComponent, HttpClientModule,
    ProductDetailsComponent, ProductEditComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Productos Angular 17';
  public header_color: string;

  constructor() {
    this.header_color = GLOBAL.header_color; 
  }
}
