import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from '../model/topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  topic: Topic;
  displayedColumns = ['seqNo', 'description', 'duration'];
  dataSource:any;

  ngOnInit(): void {
    this.topic = this.route.snapshot.data['topic'];
  }

  loadMore() {

  }

}
