import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';

import { ProjectComponent } from './project/project.component';

import { NgModule } from '@angular/core';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectResolver } from './projects.resolver';

const routes: Routes = [
    { path: '', 
    component: ProjectsListComponent,
    resolve: {
        projects: ProjectResolver
    }
},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }