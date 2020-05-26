import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../model/topic';

@Component({
  selector: 'topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent implements OnInit {

  @Input()
  topics: Topic[];

  constructor() { }

  ngOnInit(): void {
  }

}
