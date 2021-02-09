import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISpeaker } from '../models/speaker.interface';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  constructor(private afs: AngularFirestore) { }

  getSpeakers(): Observable<ISpeaker[]>{
    return this.afs.collection('speakers', ref =>   ref.where('active', '==', true).orderBy('order'))
    .valueChanges().pipe(
      map(docs => docs as ISpeaker[])
    );
  }
}
