import { createAction, props } from "@ngrx/store" ;
import { Project } from '../model/project';

export const loadAllProjects = createAction (
    "[Projects Resolver] Load All Projects"
);

export const allProjectsLoaded = createAction (
    "[Load Projects Effect] All Projects Loaded",
    props<{projects: Project[]}>()
);