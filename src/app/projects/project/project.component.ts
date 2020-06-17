import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input()
  beginnerprojects: Project[];
  
  panelOpenState: false;
  constructor() { }

  ngOnInit(): void {
    if(this.beginnerprojects.length > 0) {
      console.log(this.beginnerprojects);
    }
  }

}
