import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../../services/login-service';
import { loginUser } from '../../interfaces/login-user';

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
    private _loginServive: LoginService
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

    console.log(user);
    
    this._loginServive
      .login(user.userName, user.password)
      .subscribe(() => {

        console.log('Redirecionar para timeline');
        console.log('Logado com sucesso');
        this.loginErro = '';
      }, erro => {

        console.log(erro);
        this.loginErro = 'Login ou senha inválidos!'
      })
  }

}
