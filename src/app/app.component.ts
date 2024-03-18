import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductsListComponent } from './components/products-list.component';
import { GLOBAL} from './services/global';
import { HttpClientModule,provideHttpClient, withFetch } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details.component';
import { ProductEditComponent } from './components/product-edit.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { KendoComponent } from './components/kendo.component';
import { IconsModule } from '@progress/kendo-angular-icons';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import {PanelBarModule } from '@progress/kendo-angular-layout';
import { cartIcon, userIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, ErrorComponent, RouterModule, ProductsListComponent, HttpClientModule,
    ProductDetailsComponent, ProductEditComponent,DateInputsModule,KendoComponent,NavigationModule,IconsModule, IndicatorsModule
  ,PanelBarModule,ButtonModule],
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
  public userIcon: SVGIcon = userIcon;
  public cartIcon: SVGIcon = cartIcon;
}
