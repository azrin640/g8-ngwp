import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Login } from '../interface/login/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  res: Login['content']['rendered'];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {

    let user = {
      username: 'azrin640',
      password: 'Engine1@'
    };

    this.authService.getLogin(user)
      .subscribe((response: any) => {
        console.log(response);
      })
        
  }

}
