import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  ev:any=[];
  
  constructor(private even:EventService, private router:Router) { }

  ngOnInit(): void {
    this.even.getevents().subscribe(
      res=>
      {
      this.ev=res,
        console.log(this.ev)
      },
      
      err=>
      {
        // console.log(err)
        if(err instanceof HttpErrorResponse)
        {
          if(err.status===401)
          {
            this.router.navigate(['/login'])
          }
        }
      }
      

      
    )
  }

}
