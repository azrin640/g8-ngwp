import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {

    
  }
  
  register()
  {

    let user = {
      username : 'azrindinamik',
      email: 'azrindinamik@gmail.com',
      password: 'Engine1@'
    };
    
    this.authService.register(user)
      .subscribe(response => {
        console.log(response);
      });
  }
  
}
