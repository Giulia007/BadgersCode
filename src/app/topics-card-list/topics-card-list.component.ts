import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../model/topic';

@Component({
  selector: 'topics-card-list',
  templateUrl: './topics-card-list.component.html',
  styleUrls: ['./topics-card-list.component.css']
})
export class TopicsCardListComponent implements OnInit {

  @Input()
  topics: Topic[]

  constructor() { }

  ngOnInit(): void {
  }

}
