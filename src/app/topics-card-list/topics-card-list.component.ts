import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../model/topic';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import  { TopicDialogComponent } from '../topic-dialog/topic-dialog.component'

@Component({
  selector: 'topics-card-list',
  templateUrl: './topics-card-list.component.html',
  styleUrls: ['./topics-card-list.component.css']
})
export class TopicsCardListComponent implements OnInit {

  @Input()
  topics: Topic[]

  constructor( private dialog: MatDialog) { }

    edtiTopic(topic) {
      const dialogConfig = new MatDialogConfig();
      //dialog does not close when clicking outside of it
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      //the data that we are passing to the dialog
      dialogConfig.data = topic;
      this.dialog.open(TopicDialogComponent)

    }

  ngOnInit(): void {
  }

}
