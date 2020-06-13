import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../auth/reducers';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from '../auth/auth.selectors';
import { logout, login } from '../auth/auth.actions';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    const userProfile = localStorage.getItem("user");
    if(userProfile) {
      this.store.dispatch(login({user: JSON.parse(userProfile)}));
    }
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
