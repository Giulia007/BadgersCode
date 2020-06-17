import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectResolver } from './projects.resolver';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffects } from './projects.effects';
import { ProjectsHttpService } from './services/projects.http-service';
import { StoreModule } from '@ngrx/store';
import { projectsReducer } from './reducers/project.reducers';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [ProjectComponent, ProjectsListComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    EffectsModule.forFeature([ProjectsEffects]),
    StoreModule.forFeature('projects', projectsReducer)
  ],
  providers: [
    ProjectsHttpService,
    ProjectResolver
  ]
})
export class ProjectsModule { }
