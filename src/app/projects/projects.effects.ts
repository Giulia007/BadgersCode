import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ProjectActions } from './actions.types';
import { ProjectsHttpService } from './services/projects.http-service';
import { allProjectsLoaded } from './project.actions';
import { concatMap, map } from 'rxjs/operators';


@Injectable()
export class ProjectsEffects {
    constructor(private actions$: Actions,
        private projectsHttp: ProjectsHttpService) { }

    loadedProjects$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(ProjectActions.loadAllProjects),
                concatMap(action =>
                    this.projectsHttp.getAllProjects()),
                map(projects => allProjectsLoaded({ projects }))
            )
    )
}