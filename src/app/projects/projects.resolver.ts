import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../auth/reducers';
import { loadAllProjects } from './project.actions';
import { tap, first, finalize } from 'rxjs/operators';

@Injectable()
export class ProjectResolver implements Resolve<any> {

    loading = false;
    constructor(private store: Store<AppState>) { }
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
        return this.store
            .pipe(
                //this is the rxjs operator for side-effects
                tap(() => {
                    if (!this.loading) {
                        this.loading = true;
                        this.store.dispatch(loadAllProjects())
                    }
                }),
                first(),
                finalize(() => this.loading = false)
            );
    }
}