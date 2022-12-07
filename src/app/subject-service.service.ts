import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  constructor() { }


  eventname = new BehaviorSubject<any>(null);

  bookticket = new BehaviorSubject<any>(null); 
}
