import { ITicket } from './../models/ticket.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {


  constructor(private afs: AngularFirestore) { }


  getTickets(): Observable<ITicket[]>{
    return this.afs.collection('tickets', ref =>   ref.where('active', '==', true).orderBy('order'))
    .valueChanges().pipe(
      map(docs => docs as ITicket[])
    );
  }
}
