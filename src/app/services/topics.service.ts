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
    console.log('loadAllTopics called!');
   const topp:Observable<any> = this.db.collection("topics").get();
   console.log('topp: ' + topp);
  }


}
