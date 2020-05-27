import { Component, OnInit } from '@angular/core';
import {Topic } from "../model/topic";
import {TOPICS} from "../model/db-data";
import { TopicsService } from '../services/topics.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allTopics$: Observable<Topic[]>;
  beginnerTopics: Topic[];
  advancedTopics: Topic[];
  allTopicsArray: Topic[];

  constructor(private topicService: TopicsService) { }


  ngOnInit() {

    this.allTopics$ = this.topicService.loadAllTopics();
    /* this.topicService.addTopic(); */

    const topics:any = Object.values(TOPICS);
    this.beginnerTopics = topics.filter(topic => topic.category === 'BEGINNER');
    this.advancedTopics = topics.filter(topic => topic.category === 'ADVANCED');
  }

}
