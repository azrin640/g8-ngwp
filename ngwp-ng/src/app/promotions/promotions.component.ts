import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

export interface CountdownTimer {
  days?: number,
  hours?: number,
  minutes?: number,
  seconds?: number
}

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  hours = new Observable<number>((observer: Observer<number>) => {
    setInterval(() => {
      var countDownDate = 1559145600000;
      var now = Date.now();      
      var distance = countDownDate - now;      
      observer.next(Math.floor(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))));
    }, 1000);
  });

  minutes = new Observable<number>((observer: Observer<number>) => {
    setInterval(() => {
      var countDownDate = 1559145600000;
      var now = Date.now();      
      var distance = countDownDate - now;      
      observer.next(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    }, 1000);
  });

  

  seconds = new Observable<number>((observer: Observer<number>) => {
    setInterval(() => {
      var countDownDate = 1559145600000;
      var now = Date.now();      
      var distance = countDownDate - now;      
      observer.next(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
  });

  constructor(
  ) { }

  ngOnInit() {
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      // var seconds = 
  }

}
