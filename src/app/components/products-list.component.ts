import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "../services/products.service";
import { Product } from "../models/products";
import { CommonModule } from "@angular/common";

@Component({
  selector: "products-list",
  templateUrl: "../views/products-list.html",
  imports: [CommonModule],
  providers: [ProductsService],
  standalone: true
})

export class ProductsListComponent {
  public title: string;
  public products: Product[] = []; 

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productsService: ProductsService
  ) {
    this.title = "Listado de productos";
  }

  ngOnInit() {
   this._productsService.getProducts().subscribe(
    (result: any) => {
      
      this.products = result;
      console.log('Productos: '+this.products);
      
    },
    error => {
      console.log('Error:', error);
    }
  );
}

}  
