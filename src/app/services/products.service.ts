import { Injectable } from "@angular/core";
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { GLOBAL } from "./global";
import { Product } from "../models/products";

@Injectable()
export class ProductsService {
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }

    getProducts(): Observable<any> {
        return this._http.get(this.url + 'products').pipe(
          tap(data => console.log('Data:', data)),
          catchError(error => {
            console.log('Error:', error);
            return throwError(error);
          })
        );
      }
    getProduct(id: string): Observable<any> {
      
        return this._http.get(this.url + 'products/' + id).pipe(
          tap(data => console.log('Data:', data)),
          catchError(error => {
            console.log('Error:', error);
            return throwError(error);
          })
        );
    }

    addProduct(product: Product){
      let json = JSON.stringify(product);
      let params = 'json=' + json;
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      
      return this._http.post(this.url + 'products', params, {headers: headers})
        .pipe(map(res => res));
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>){
      return new Promise((resolve, reject) => {
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();

        for(var i = 0; i < files.length; i++){
          formData.append('uploads[]', files[i], files[i].name);
        }

        xhr.onreadystatechange = function(){
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              resolve(JSON.parse(xhr.response));
            }else{
              reject(xhr.response);
            }
          }
        };

        xhr.open("POST", url, true);
        xhr.send(formData);
      });
    }

  editProduct(id: string, product: Product) : Observable<any>{
    let json = JSON.stringify(product);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'update-product/' + id, params, {headers: headers})
      .pipe(map(res => res));
  }

  deleteProduct(id: string) : Observable<any>{
    return this._http.get(this.url + 'delete-product/' + id)
      .pipe(map(res => res));
  }
}