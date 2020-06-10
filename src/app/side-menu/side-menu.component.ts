import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../auth/reducers';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { map } from 'rxjs/operators';
import { isLoggedIn, isLoggedOut } from '../auth/auth.selectors';
import { logout } from '../auth/auth.actions';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store
    .pipe(
       select(isLoggedIn) 
    )
    this.isLoggedOut$ = this.store
    .pipe(
      select(isLoggedOut)
    )
  }

  logout() {
    this.store.dispatch(logout());
  }

}
