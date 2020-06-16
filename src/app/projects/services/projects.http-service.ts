import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Project } from 'src/app/model/project';

@Injectable()
export class ProjectsHttpService {

    constructor(private http: HttpClient){}

    getAllProjects(): Observable<Project[]>{
         return this.http.get('/api/projects')
            .pipe(
               // tap(projects => console.log(projects)),
                map(res => res['payload'])
            )
    }

}