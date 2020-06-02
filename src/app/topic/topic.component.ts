import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from '../model/topic';
import { TopicsService } from '../services/topics.service';
import { Lesson } from '../model/lesson';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { finalize, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private topicsService: TopicsService) { }

  topic: Topic;
  lessons: Lesson[];
  displayedColumns = ['seqNo', 'description'];
  dataSource:any;
  lastPageLoaded = 0;
  loading = false;

  @ViewChild('searchInput', { static: true }) input: ElementRef;

  ngOnInit(): void {
    this.topic = this.route.snapshot.data['topic'];
    this.loading = true;
    this.topicsService.findLessons(this.topic.id)
    .pipe(finalize(()=> this.loading = false))
    .subscribe(lessons => this.lessons = lessons);
  }

  loadMore() {
    this.lastPageLoaded ++;
    this.loading = true;
    this.topicsService.findLessons(this.topic.id, 'asc', this.lastPageLoaded)
    .pipe(finalize(()=> this.loading = false))
    .subscribe(lessons => this.lessons = this.lessons.concat(lessons));
  }

  ngAfterViewInit() {
    fromEvent<any>(this.input.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(console.log);
  }

}
