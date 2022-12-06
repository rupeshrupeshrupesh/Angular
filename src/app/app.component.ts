import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http'
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PipeAndInterceptor';
  // public auth:AuthService
  constructor(private http:HttpClient,public auth:AuthService){

  }

  myObservable=new Observable((obs)=>{
    console.log("observable starts");

    setTimeout(() => {
      obs.next("1");
      
    }, 1000);
    setTimeout(() => {
      obs.next("2");
    }, 1000);


    setTimeout(() => {
      
    obs.error(new Error('something went to wrong'));
}, 1000);

    setTimeout(() => {
      
    obs.complete();
    }, 1000);
   

  

    




  });
  ngOnInit(){
    this.myObservable.subscribe((vol)=>{
        console.log(vol);
        
    },
    (error)=>{
      // alert(error);

    },
    ()=>{
      alert('obervable complte')
    }
    );

  }
  username:string
  password:string

  setvalue(){

  }

  //rxjs  

}
