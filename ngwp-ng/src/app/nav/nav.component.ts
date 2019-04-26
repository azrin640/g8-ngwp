import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menus: any[] = [
    { name: 'Home', link: '/'},
    { name: 'Products', link: '/products'},
    { name: 'Promotions', link: '/promotions'},
    { name: 'Login', link: '/login'}
  ];

  constructor(
  ) { }

  ngOnInit() {

  }

}
