import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Login } from 'src/app/interface/login/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  getLogin(user)
  {
    console.log(user);
    return this.http.post('/api/hwp/user/login', user)
      .pipe(
        catchError(error => throwError(error))
      );
  }

  isLoggedIn()
  {
    let token = localStorage.getItem('token');
    return token ? true : false; 
  }

  register(user)
  {
    return this.http.post('/api/hwp/user/register', user)
      .pipe(
        catchError(error => throwError(error))
      );
  }
}
