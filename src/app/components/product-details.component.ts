import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "../services/products.service";
import {Product} from "../models/products";
import { CommonModule } from "@angular/common";



@Component({
    selector: "product-details",
    templateUrl: "../views/product-detail.html",
    imports: [CommonModule],
    providers: [ProductsService],
    standalone: true
    })

    export class ProductDetailsComponent {
        public product: Product;

        constructor(
            private _route: ActivatedRoute,
            private _router: Router,
            private _productsService: ProductsService
        ){
            this.product = new Product('', '', '', 0, '');
        }

        ngOnInit(){
            console.log("product-details.component.ts cargado");
            this.getProduct();
        }

        getProduct(){
            this._route.params.forEach((params: Params) => {
                let id = params['id'];

                this._productsService.getProduct(id).subscribe(
                    (result: any) => {
                        if(result){
                            this.product = result.data;
                        }else{
                            this._router.navigate(['/products']);
                        }
                    },
                    error => {
                        console.log('Error:', error);
                    }
                );
            });
        }
}