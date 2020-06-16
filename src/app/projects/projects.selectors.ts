import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState } from './reducers/project.reducers';
import * as fromProjects from './reducers/project.reducers';

export const SelectProjectsState = createFeatureSelector<ProjectsState>('projects');
//get all projects from the store entity state
export const selectAllProjects = createSelector(
    SelectProjectsState,
    fromProjects.selectAll
);

export const selectBeginnerProjects = createSelector(
    selectAllProjects,
    projects => projects.filter(project => project.category == 'beginner' 
                                        && project.published == true)
);
export const selectIntermediateProjects = createSelector(
    selectAllProjects,
    projects => projects.filter(project => project.category == 'intermediate'
                                        && project.published == true)
);
export const selectAdvancedProjects = createSelector(
    selectAllProjects,
    projects => projects.filter(project => project.category == 'advanced' 
                                        && project.published == true)
);


