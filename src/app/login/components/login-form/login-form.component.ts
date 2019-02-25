import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../../services/login-service';
import { loginUser } from '../../interfaces/login-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  loginErro: string ='';

  constructor(
    private _fb: FormBuilder,
    private _loginServive: LoginService,
    private _router: Router
  ) { }

  ngOnInit() {

    this.loginForm = this._fb.group({

      userName: [
        '',
        Validators.required
      ],
      password: [
        '',
        Validators.required
      ]
    })
  }

  login(e: Event): void {

    e.preventDefault();

    const user = this.loginForm.getRawValue() as loginUser;

    this._loginServive
      .login(user.userName, user.password)
      .subscribe(() => {

        this._router.navigate([user.userName, 'timeline']);
        this.loginErro = '';
      }, erro => {

        console.log(erro);
        this.loginErro = 'Login ou senha inválidos!'
      })
  }

}
