import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITeam } from '../models/team.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private afs: AngularFirestore) { }


  getTeam(): Observable<ITeam[]>{
    return this.afs.collection('team', ref =>   ref.where('active', '==', true).orderBy('order'))
    .valueChanges().pipe(
      map(docs => docs as ITeam[])
    );
  }
}
