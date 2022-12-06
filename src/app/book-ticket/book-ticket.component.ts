import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  constructor(private even:EventService,
    private router:Router) { }
  moviearry:any=[];
  show:number=0;

  ngOnInit(): void {

    this.even.gethub().subscribe(

      res=>
      {
        console.log(res);
        this.moviearry=res;

      },
      err=>
      {
        if(err instanceof HttpErrorResponse)
        {
          if(err.status===401)
          {
            this.router.navigate(['/login'])
          }
        }
        // console.log(err);
        // if(err instanceof HttpErrorResponse)
        // {
        //   if(err.status===401)
        //   {
        //     this.router.navigate(['/login'])
        //   }
        // }
        
      }
    )
  }
  availableMovie()
  {
    this.show=1;
  }
  hide()
  {
    this.show=0
  }
  GetInformation()
  {
   this.show =2;
  }


}
