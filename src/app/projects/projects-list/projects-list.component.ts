import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/auth/reducers';
import { Observable } from 'rxjs';
import { Project } from 'src/app/model/project';
import { selectBeginnerProjects } from '../projects.selectors';
import { selectIntermediateProjects } from '../projects.selectors';
import { selectAdvancedProjects } from '../projects.selectors';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  beginnerProjects$: Observable<Project[]>;
  intermediateProjects$: Observable<Project[]>;
  advancedProjects$: Observable<Project[]>;

  ngOnInit(): void {
    this.beginnerProjects$ = this.store.pipe(
      select(selectBeginnerProjects),
      tap(projects => console.log(JSON.stringify(projects)))
    );

    this.intermediateProjects$ = this.store.pipe(
      select(selectIntermediateProjects),
      tap(projects => console.log(JSON.stringify(projects)))
    );
    this.advancedProjects$ = this.store.pipe(
      select(selectAdvancedProjects),
      tap(projects => console.log('minchiaaaa' + JSON.stringify(projects))),
    );

  }

}
