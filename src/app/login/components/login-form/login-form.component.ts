import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _loginServive: LoginService
  ) { }

  ngOnInit() {

    this.loginForm = this._fb.group({

      userName: ['username'],
      password: ['123']
    })
  }

  login(e: Event): void {

    e.preventDefault();

    console.log('Login');
    this._loginServive
      .login('flavio', 123)
      .subscribe((res) => {
        console.log(res);
        
        console.log('Logado com sucesso');
      }, erro => console.log(erro))
  }

}
