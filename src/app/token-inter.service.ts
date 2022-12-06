import { Injectable ,Injector} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { NgIfContext } from '@angular/common';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class TokenInterService implements HttpInterceptor{

  constructor(private injector:Injector) { }
 
  
//  intercept(req: { clone: (arg0: { setHeader: { Authorization: string; }; }) => any; },next: { handle: (arg0: any) => any; })
//  {
//   let authService=this.injector.get(AuthService);
//   let tokenizedReq=req.clone({
//     setHeader:
//     {
//       Authorization:`Beaarer  ${authService.getToken()}  `
//     }
//   })
//   return next.handle(tokenizedReq)
//  }
intercept(req:any,next:any)
{

  let auth=this.injector.get(AuthService)
  let tokenzed=req.clone(
    {
      setHeaders:{
        Authorization:` bearer ${auth.getToken()}`

        // Authorization:'bearer  xx.yy.zz'
      }
    }
  )
  return next.handle(tokenzed)
}
}
