import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { RouterOutlet, RouterModule } from '@angular/router';
import { ProductsService } from "../services/products.service";
import { Product } from "../models/products";
import { CommonModule } from "@angular/common";

@Component({
  selector: "products-list",
  templateUrl: "../views/products-list.html",
  imports: [CommonModule,RouterOutlet,RouterModule],
  providers: [ProductsService],
  standalone: true
})

export class ProductsListComponent {
  public title: string;
  public products: Product[] = []; 
  public confirmDelete: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productsService: ProductsService
  ) {
    this.title = "Listado de productos";
    this.confirmDelete = '';
  }

  ngOnInit() {
   console.log("products-list.component cargado");
   this.getProducts();
}
  getProducts() {
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
  

  deleteConfirm(id: string){
    this.confirmDelete = id;
  }

  cancelDelete(){
    this.confirmDelete = '';
  }

  onDeleteProduct(id: string){
    this._productsService.deleteProduct(id).subscribe(
      (result: any) => {
        if(result.code == 200){
          this.getProducts();
        }
        
      },
      error => {
        console.log('Error:', error);
      }
    );
  }

}  
