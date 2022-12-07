import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {

  constructor(private even:EventService,
    private router:Router,
    private serve:SubjectServiceService) { }
  public hubarray:any=[];
  public hubarraydata:any=[]
  valuestring:any=[]
  ngOnInit(): void {

    this.even.gethub().subscribe(
      res=>
      {
        // console.log(res),
        this.hubarray=res;
      },
      
      err=>console.log(err),
      
    );

    // this.serve.eventname.subscribe(
    //   res=>
    //   {
    //     this.hubarraydata=res;
    //   }
    // )
  }
  orderevent(){
    this.router.navigate(['/login']);

  }
  callbookticket(value:any)
  {

    // console.log(value);
    this.valuestring=value
    this.serve.eventname.next(value);


  }

}
