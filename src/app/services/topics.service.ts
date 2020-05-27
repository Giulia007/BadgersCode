import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, first } from 'rxjs/operators';
import { Topic } from '../model/topic';
import { Observable } from 'rxjs';
import { convertSnaps } from './db-utils';

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

  findTopicByUrl(topicUrl: string): Observable<Topic> {
    return this.db.collection('topics',
      ref => ref.where('topicUrl', '==', topicUrl))
      .snapshotChanges()
      .pipe(map(snaps => {
        const topics = convertSnaps<Topic>(snaps);
        return topics.length == 1 ? topics[0] : undefined;
      }),
       first()
      )
  }

  loadAllTopics(): Observable<Topic[]> {
    return this.db.collection("topics",
      ref => ref.orderBy('seqNo')
    )
      .snapshotChanges()
      .pipe(map(snaps => convertSnaps<Topic>(snaps), first())
      );
  }
}