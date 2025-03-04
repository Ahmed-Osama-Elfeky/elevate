import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


private readonly _HttpClient=inject(HttpClient)

  constructor() { }
  getAllproducts():Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/products')
  }
  getSpecificPeoducts(id:string):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`)
  }


}
