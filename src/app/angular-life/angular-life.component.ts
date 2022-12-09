import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-angular-life',
  templateUrl: './angular-life.component.html',
  styleUrls: ['./angular-life.component.css']
})
export class AngularLifeComponent implements OnInit ,OnChanges,OnDestroy{

  title:"simplecrm"

  name:"rupesh"

 

  constructor() { 
    console.log("construsctor");
    
  }
  ngOnDestroy(){
    console.log("ondestroy");
    
  }
  ngOnChanges() {
 
    console.log("ngonchange");
    
  }

  ngOnInit(): void {
    console.log("ngoninit");
    
   
  }

}
