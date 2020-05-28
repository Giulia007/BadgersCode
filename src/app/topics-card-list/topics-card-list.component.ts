import { Component, OnInit, Input, Output } from '@angular/core';
import { Topic } from '../model/topic';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { TopicDialogComponent } from '../topic-dialog/topic-dialog.component'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'topics-card-list',
  templateUrl: './topics-card-list.component.html',
  styleUrls: ['./topics-card-list.component.css']
})
export class TopicsCardListComponent implements OnInit {

  @Input() topics: Topic[];

  @Output() topicEdited = new EventEmitter();

  constructor(private dialog: MatDialog) { }

  edtiTopic(topic: Topic) {
    const dialogConfig = new MatDialogConfig();
    //dialog does not close when clicking outside of it
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //the data that we are passing to the dialog
    dialogConfig.data = topic;
    this.dialog.open(TopicDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(val => {
        if (val) {
          this.topicEdited.emit();
        }
      });

  }
  ngOnInit(): void {
  }

}
