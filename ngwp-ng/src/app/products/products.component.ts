import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { Category } from '../interface/category/category';
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar, matSnackBarAnimations, SimpleSnackBar } from '@angular/material';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  title = 'Products';
  initialProducts: any[];
  products: any[];
  categories: Category[];
  categoryMode: boolean = false;
  opened: boolean = false;

  constructor(
    private productsService: ProductsService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {

    this.productsService.getCatogories()
      .subscribe((res: Category[]) => {   
        this.categories = res;
        console.log(res);
      });

    this.productsService.getProducts()
      .subscribe((response: Category[]) => {
        console.log(response);
        this.products = response;
        this.initialProducts = response;
      })
  }

  openSideMenu(state)
  {
    state ? (this.opened=false) : (this.opened=true);
  }
  
  filterProducts(productId)
  {
    let products = this.initialProducts;

    let filteredProducts = products.filter(product => product.categories.find(category => category.id === productId));
    this.products = filteredProducts;
  }

  favoriteProduct(productId)
  {
    let isLoggedIn = this.authService.isLoggedIn();
    if(!isLoggedIn) this.snackBar.open('Only registered User can favorite', 'Close', {duration: 7000});
  }

  addProduct(productId)
  {
    console.log(productId);
    if(productId) this.snackBar.open('Product added to cart', 'Close', {duration: 7000});
  }
}
