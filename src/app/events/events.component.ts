import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  ev:any=[];
  name:string;
  constructor(private even:EventService) { }

  ngOnInit(): void {
    this.even.getevents().subscribe(
      res=>
      {
      this.ev=res,
        console.log(this.ev)
      },
      
      err=>console.log(err)
      

      
    )
  }

}
