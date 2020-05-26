import { Component, OnInit } from '@angular/core';
import {Topic } from "../model/topic";
import {TOPICS} from "../model/db-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerTopics: Topic[];
  advancedTopics: Topic[];

  constructor() { }

  ngOnInit() {
    const topics:any = Object.values(TOPICS);
    this.beginnerTopics = topics.filter(topic => topic.category === 'BEGINNER');
    this.advancedTopics = topics.filter(topic => topic.category === 'ADVANCED');
  }

}
