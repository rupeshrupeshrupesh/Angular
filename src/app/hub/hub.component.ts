import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {

  constructor(private even:EventService,
    private router:Router) { }
  public hubarray:any=[];
  
  ngOnInit(): void {

    this.even.gethub().subscribe(
      res=>
      {
        // console.log(res),
        this.hubarray=res;
      },
      
      err=>console.log(err),
      
    );
  }
  orderevent(){
    this.router.navigate(['/login']);

  }

}
