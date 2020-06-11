import { Component, OnInit } from '@angular/core';
import {Topic } from "../model/topic";
import { TopicsService } from '../services/topics.service'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  beginnerTopics$: Observable<Topic[]>;
  advancedTopics$: Observable<Topic[]>;
  allTopicsArray: Topic[];

  allTopics$: Observable<Topic[]>;

  constructor(private topicService: TopicsService) { }

  reloadTopic() {
    this.allTopics$ = this.topicService.loadAllTopics();

    this.beginnerTopics$ = this.allTopics$.pipe(
      map(topics => topics.filter(
        topic => topic.categories.includes('beginner')
      ))
    );

    this.advancedTopics$ = this.allTopics$.pipe(
      map(topics => topics.filter(
        topic => topic.categories.includes('advanced')
      ))
    );
  }

  ngOnInit() {
    this.reloadTopic();

    /* this.topicService.addTopic(); */
  }

}
