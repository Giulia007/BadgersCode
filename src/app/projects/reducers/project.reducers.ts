import { Project } from 'src/app/model/project';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ProjectActions } from '../actions.types';

export interface ProjectsState extends EntityState<Project>{
}

export const adapter = createEntityAdapter<Project>();
export const initialProjectState = adapter.getInitialState();

export const projectsReducer = createReducer(
    initialProjectState,
    on(ProjectActions.allProjectsLoaded,
        (state, action) => adapter.addAll(action.projects, state)
    )
);

