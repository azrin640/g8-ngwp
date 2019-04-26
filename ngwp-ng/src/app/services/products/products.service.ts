import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Products } from 'src/app/interface/products/products';
import { Product } from 'src/app/interface/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts()
  {
    return this.http.get('/api/products')
      .pipe(
        catchError(error => throwError(error))
      )
  }

  getCatogories()
  {
    return this.http.get('/api/products/categories')
      .pipe(
        catchError(error => throwError(error))
      )
  }
}


