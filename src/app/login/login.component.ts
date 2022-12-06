import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  loginUserData = {
    email: '',
    password: ''
     
    }


    loginuser(){
      //console.log(this.loginUserData);
      

      this.auth.loginuser(this.loginUserData).subscribe(
        res=> 
        {
          console.log(res)
          localStorage.setItem("token",res.token)
          this.router.navigate(['/special'])
        },
        err=> console.log(err)
        
        
      )
    }
  }
  
  // console.log(this.loginuser);