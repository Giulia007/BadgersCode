import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, first } from 'rxjs/operators';
import { Topic } from '../model/topic';
import { Observable, from } from 'rxjs';
import { convertSnaps } from './db-utils';
import { Lesson } from '../model/lesson';
import OrderByDirection = firebase.firestore.OrderByDirection;

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(private db: AngularFirestore) {}

  saveTopic(topicId:string, changes: Partial<Topic>): Observable<any> {
   return from (this.db.doc(`topics/${topicId}`).update(changes));
  }

  /* addTopic() {
    this.db.collection("topics").add({
      id: 2,
      title: "Secondo topic"
  });
  } */

  findTopicByUrl(topicUrl: string): Observable<Topic> {
    return this.db.collection('topics',
      ref => ref.where('url', '==', topicUrl))
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

  findLessons(topicId:string, sortOrder: OrderByDirection = 'asc',
              pageNumber = 0, pageSize = 3): Observable<Lesson[]> {

      return this.db.collection(`topics/${topicId}/lessons`,
                  ref => ref.orderBy('seqNo', sortOrder) 
                  .limit(pageSize)
                  .startAfter(pageNumber * pageSize))
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<Lesson>(snaps)),
        first()
      )

  }   


}