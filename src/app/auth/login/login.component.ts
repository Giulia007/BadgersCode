import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {noop} from "rxjs";
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthState } from '../reducers'
import { login } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb:FormBuilder,
      private auth: AuthService,
      private router:Router,
      private store: Store<AuthState>
  ) { 
    this.form = fb.group({
      email: ['test@ghiro.io', [Validators.required]],
      password: ['test', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  login() {

    const val = this.form.value;

    this.auth.login(val.email, val.password)
      .pipe(
        tap(user => {
            console.log(user);
            this.store.dispatch( login({user}));
            this.router.navigateByUrl('/');
        })
      )
      .subscribe(
        //successful login
        noop,
        ()=> alert('Login failed!')
      )
  }

}
