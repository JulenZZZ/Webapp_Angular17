import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "../services/products.service";
import {Product} from "../models/products";
import { FormsModule } from "@angular/forms";
import { GLOBAL } from "../services/global";



@Component({
    selector: "product-edit",
    templateUrl: "../views/product-add.html",
    imports: [CommonModule,FormsModule],
    providers: [ProductsService],
    standalone: true
    })

export class ProductEditComponent {
    public title: string;
    public product: Product; 
    public filesToUpload: Array<File> = [];
    public resultUpload: any;
    public is_edit: boolean = true;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productsService: ProductsService
    ){

        this.title = "Editar producto";
        this.product = new Product('', '', '', 0, '');
    }



    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }

    ngOnInit(){
        console.log('product-edit.component.ts cargado');
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
    onSubmit() {

        console.log(this.product);
    
        if ( this.filesToUpload && this.filesToUpload.length >= 1) {
            this._productsService.makeFileRequest(GLOBAL.url+'upload-image', [], this.filesToUpload).then((result: any) => {
            console.log('Result:', result);
    
            this.resultUpload = result;
            this.product.imagen = this.resultUpload.file_name;
            this.updateProduct();
            },
            error => {
              console.log('Error:', error.error);
            }
          );
        } else {
          
          this.updateProduct();
        }
    
        
      }
    
      updateProduct() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

                this._productsService.editProduct(id,this.product).subscribe(
                (result: any) => {
                    
                    this._router.navigate(['/product-details', id]);
                    
            
                }, (error: any) => {
                    console.log('Error:', error);
                });
        });
    }

}