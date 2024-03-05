import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "../services/products.service";
import { Product } from "../models/products";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GLOBAL } from "../services/global";



@Component({
  selector: "product-add",
  templateUrl: "../views/product-add.html",
  imports: [CommonModule,FormsModule ],
  providers: [ProductsService],
  standalone: true
})

export class ProductAddComponent {
  public title: string;
  public product: Product;
  public filesToUpload: Array<File> = [];
  public resultUpload: any;
  public is_edit: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productsService: ProductsService
  ) {
    this.title = "Crear nuevo producto";
    this.product = new Product("", "", "", 0, "");
  }

  ngOnInit() {
    console.log("product-add.component.ts cargado");
    /*
    this.product = {
      id: '',
      nombre: '',
      description: '',
      precio: 0,
      imagen: ''
    };
    */
  }

  onSubmit() {

    console.log(this.product);

    if ( this.filesToUpload && this.filesToUpload.length >= 1) {
        this._productsService.makeFileRequest(GLOBAL.url+'upload-image', [], this.filesToUpload).then((result: any) => {
        console.log('Result:', result);

        this.resultUpload = result;
        this.product.imagen = this.resultUpload.file_name;
        this.saveProduct();
        },
        error => {
          console.log('Error:', error.error);
        }
      );
    } else {
      
      this.saveProduct();
    }

    
  }

  saveProduct() {
    this._productsService.addProduct(this.product).subscribe(
      (response: any) => {
        if (response) { 
          this._router.navigate(['/products']);
        }else{
          console.log('Error:', response);
        }

      }, (error: any) => {
        console.log('Error:', error);
      });
  }



  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }
} 