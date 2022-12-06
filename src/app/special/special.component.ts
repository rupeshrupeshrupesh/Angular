import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';


@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  constructor(private even:EventService,
    private router:Router) { }

  special:any=[];
  ngOnInit(): void {
    this.even.getspecial().subscribe(
      res=>
      {
        this.special=res
        console.log(res);
        
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
        // console.log(err),
    )
    //   }

    // this.even.getspecial().subscribe(
    //   res=>
    //   {
    //     this.special=res;
    //     console.log(this.special);
    //   },
    //   err=>console.log(err),
      
    // )
    }
  }
      
  