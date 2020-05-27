import { Component, OnInit } from '@angular/core';
import {Topic } from "../model/topic";
import { TopicsService } from '../services/topics.service'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerTopics$: Observable<Topic[]>;
  advancedTopics$: Observable<Topic[]>;
  allTopicsArray: Topic[];

  allTopics$: Observable<Topic[]>;

  constructor(private topicService: TopicsService) { }

  ngOnInit() {

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


    /* this.topicService.addTopic(); */

  }

}
