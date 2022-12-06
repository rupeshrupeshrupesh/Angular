import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { retry } from 'rxjs';
// import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,
    private router:Router){ }



    canActivate():any{
      if(this.auth.loggedIn())
      {
        return true;
      }
      else{
        this.router.navigate(['/login'])
        return false;
      }
    }
  // 
    // canActivate():any {
    //   if(this.auth.loggedIn())
    //   {
    //     return true;
    //   }
    //   else{
    //     this.router.navigate(['/login'])
    //     return false;
    //   }

    // }
 
  }
  
