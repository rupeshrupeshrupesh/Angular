import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }

  private eventurl="http://localhost:3000/api/events"
  private specialurl="http://localhost:3000/api/special"
  private huburl="http://localhost:3000/api/hub"
  // private huburl="https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books"
  // private huburl='https://fakestoreapi.com/products'
  // private huburl='http://localhost:3000/movies"'

  getevents(){
    return this.http.get<any>(this.eventurl)
  }

  getspecial(){
    return this.http.get<any>(this.specialurl)
  }
  gethub()
  {
    return this.http.get<any>(this.huburl);
  }
}
