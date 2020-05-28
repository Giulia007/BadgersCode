import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Topic } from '../model/topic';
import { TopicsService } from '../services/topics.service';

@Component({
  selector: 'app-topic-dialog',
  templateUrl: './topic-dialog.component.html',
  styleUrls: ['./topic-dialog.component.css']
})
export class TopicDialogComponent implements OnInit {

  form: FormGroup;
  description: string;
  topic: Topic;

  constructor(
    private fb: FormBuilder,
    private topicsService: TopicsService,
    private dialogRef: MatDialogRef<TopicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) topic: Topic) {
    const titles = topic.titles;
    //make available the object received through mat dialog data
    this.topic = topic;
    this.form = fb.group({
      description: [titles.description, Validators.required],
      longDescription: [titles.longDescription, Validators.required]
    });
  }

  
  close() {
    this.dialogRef.close();
  }

  save() {
    const changes = this.form.value;

    this.topicsService.saveTopic(this.topic.id, {titles: changes} )
    .subscribe(
      //when we receive the data emitted by the observable, it means it was saved and we close the form
      () => this.dialogRef.close(this.form.value)
    );
    
  }

  ngOnInit(): void {
  }

}
