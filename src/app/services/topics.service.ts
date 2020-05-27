import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, first } from 'rxjs/operators';
import { Topic } from '../model/topic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(private db: AngularFirestore) {

  }

  /* addTopic() {
    this.db.collection("topics").add({
      id: 2,
      title: "Secondo topic"
  });
  } */

  loadAllTopics() {
    return this.db.collection("topics").snapshotChanges()
      .pipe(map(snaps => {
        return snaps.map(snap => {
          return <Topic>{
            id: snap.payload.doc.id,
            ...snap.payload.doc.data() as Topic
          }
        });
    }));
  }
}