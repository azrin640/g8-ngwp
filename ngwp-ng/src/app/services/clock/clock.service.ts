import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Time {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor() { }

  countDownClock(): Observable<Time>
  {
    let countDown = Observable.create( observer => {
      setTimeout(() => {
        let countdown: Time = {};     
        let now = new Date().getTime();
        let distance =  1559145600000 - now;
           
        for(let i=now; i <= 1559145600000; i++){
          countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
          countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
          observer.next(countdown);
          observer.complete();
        }
          
      }, 100);     
    });

    return countDown;    
  }
}
