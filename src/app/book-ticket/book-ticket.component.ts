import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { SubjectServiceService } from '../subject-service.service';
import { hub } from '../model/data';


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  @Input()
  public hubdata:any=[]

  constructor(private even:EventService,
    private router:Router,
    private serve:SubjectServiceService) { 
    
    }
  moviearry:any=[];
  show:number=1;
  // valuenew:any={
  //   Title: "",
  //   Year: "",
  //   Runtime: "",
  //   Poster:""


  // };
  MovieTime:any=[
    "9Am To 12Pm",
    "12Pm To 3Pm",
    "3Pm To 6Pm",
    "6Pm To 9Pm",
    "9Pm To 12Pm"
  ];

  MovieSeats:any=[
    "Golden",
    "Silver",
    "Balcony"
  ]
  valuenew:hub

  ngOnInit(): void {

    this.even.gethub().subscribe(

      res=>
      {
        console.log(res);
        console.log(this.hubdata);
        
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
     
    
        
      }
    );
    this.serve.eventname.subscribe(res=>
      {
        this.valuenew=res;
        // console.log(res.Title);
        
      });

 
  }
  availableMovie()
  {
    this.show=1;
  }
 
  box:number=0;
  moviname:string;

  GetInformation(value:any)
  {
    // this.moviname=value;
   this.show =1;
   this.box=1;
  }
  bookevent(value:any)
  {
    // console.log(value);
    
    this.serve.bookticket.next(value);
    this.router.navigate(['/special']);
  }

}
